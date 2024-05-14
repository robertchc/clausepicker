/* eslint-disable no-undef */
import { clauses } from "./clauses.js"; // Import the clause data

function generateClauses() {
  // eslint-disable-next-line no-undef
  const categoryContents = document.querySelectorAll(".category-content");

  clauses.forEach((clause) => {
    const { category, text, table, listType } = clause;
    // eslint-disable-next-line no-undef
    const clausePreview = document.createElement("div");
    clausePreview.classList.add("clause-preview");

    const parsedText = replacePlaceholders(text); // Replace placeholders
    const parsedHTML = parseHTML(parsedText); // Parse the HTML structure

    clausePreview.appendChild(parsedHTML); // Append the parsed HTML to the clausePreview element

    const insertTextFunction = async () => {
      // eslint-disable-next-line no-undef
      await Word.run(async (context) => {
        const range = context.document.getSelection();
        const placeholderRegex = /«(.*?)»/g;
        let replacedText = parsedText;
        let match;

        while ((match = placeholderRegex.exec(parsedText)) !== null) {
          const placeholder = match[1];
          const contentControl = range.insertContentControl();
          // eslint-disable-next-line no-undef
          contentControl.insertText(placeholder, Word.InsertLocation.replace);
          contentControl.tag = placeholder;
          replacedText = replacedText.replace(match[0], ""); // Replace the placeholder with an empty string
        }

        if (isList(parsedText)) {
          const listItems = replacedText
            .split("\n")
            .filter((item) => item.trim().length > 0) // Exclude empty lines
            .map((item, index) => {
              let listItemMarker;
              if (listType === "numbered") {
                listItemMarker = `${index + 1}.`; // Numbered list item marker
              } else if (listType === "lettered") {
                listItemMarker = String.fromCharCode(97 + index) + ")"; // Lettered list item marker
              } else {
                listItemMarker = "•"; // Default bulleted list item marker
              }
              return `${listItemMarker} ${item}`;
            })
            .join("\n");

          // eslint-disable-next-line no-undef
          range.insertText(listItems, Word.InsertLocation.end);
        } else {
          range.insertHtml(`<p>${replacedText}</p>`, Word.InsertLocation.end); // Wrap replacedText in <p> tags
        }

        // Add a new paragraph after the inserted text
        const newParagraph = range.insertParagraph("", Word.InsertLocation.after);
        newParagraph.select("End");

        await context.sync();
      });
    };

    const isList = (text) => {
      const listRegex = /^(\d+\.|\([a-z]\)|[•\u2022])/; // Matches numbered list, lettered list, bullet point, or bullet point with Unicode character
      return listRegex.test(text);
    };

    // Rest of the code...

    const insertTableFunction = async () => {
      await Word.run(async (context) => {
        const range = context.document.getSelection();
        const newTable = range.insertTable(table.rows.length + 1, table.header.length);

        newTable.values = [table.header, ...table.rows];
        range.select();
        await context.sync();

        // Modify table properties
        newTable.style = "Table Grid";
        newTable.styleFirstColumn = false;
        newTable.styleLastColumn = false;
      });
    };

    clausePreview.onclick = async () => {
      try {
        if (table) {
          await tryCatch(insertTableFunction);
        } else {
          await tryCatch(insertTextFunction);
        }
      } catch (error) {
        console.error(error);
      }
    };

    categoryContents.forEach((categoryContent) => {
      const categoryID = categoryContent.parentElement.id;
      if (categoryID === category) {
        categoryContent.appendChild(clausePreview);
      }
    });
  });
}

Office.onReady((info) => {
  if (info.host === Office.HostType.Word) {
    document.getElementById("sideload-msg").style.display = "none";
    document.getElementById("app-body").style.display = "block";
    generateClauses();
  }
});

function tryCatch(callback) {
  return Word.run(callback).catch(function (error) {
    console.error(error);
  });
}

function replacePlaceholders(text) {
  const placeholderRegex = /\[(.*?)\]/g;
  const replacedText = text.replace(placeholderRegex, (match, placeholder) => {
    switch (placeholder) {
      case "Ndame":
        return "Name";
      case "nadme and citation of statute":
        return "name and citation of statute";
      case "Ndame of other party":
        return "Name of other party";
      default:
        return match; // Preserve the placeholder if no replacement is found
    }
  });

  return replacedText;
}

function parseHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content;
}
