/* eslint-disable no-undef */
const clauses = [
  {
    category: "subcategory2-1",
    text: "[Name] has applied under [name and citation of statute].",
  },

  {
    category: "subcategory2-1",
    text: "[Name of other party] has been served;",
  },

  {
    category: "subcategory2-1",
    text: "Upon hearing [describe whether parties, parties’ counsel, one party and the other’s counsel];",
  },
  { category: "subcategory2-1", text: "Having considered the evidence and submissions;" },
  { category: "subcategory2-2", text: "The parties are [not] married." },

  {
    category: "subcategory2-3",
    text: "\"The parties are the parents of the following child[ren] who are referred to as 'the child[ren]' in this order:",
  },
  {
    category: "subcategory2-3",
    text: '"[name] admits he is [the father/a possible father] of:',
  },

  {
    category: "subcategory2-3",
    text: "TABLE - CHILD NAME AND DOB",
    table: {
      header: ["Name of Child", "Date of Birth"],
      rows: [
        ["", ""],
        ["", ""],
      ],
    },
  },
  { category: "subcategory2-3", text: "[Name] reserves his right to challenge paternity in the future." },
  {
    category: "subcategory2-4",
    text: '"[Name of party seeking leave], [describe connection of party seeking leave to the child(ren)], has applied for leave to apply for [custody and/or access] to the child(ren):"',
  },
  {
    category: "subcategory2-4",
    text: "TABLE - CHILD NAME AND DOB",
    table: {
      header: ["Name of Child", "Date of Birth"],
      rows: [
        ["", ""],
        ["", ""],
      ],
    },
  },
  {
    category: "subcategory2-4",
    text: "[Names of other parties] agree [name of party seeking leave] will have leave to apply for [custody and/or access];",
  },
  {
    category: "subcategory3-1",
    text: "The party caring for the child(ren) will make decisions related to the child(ren)'s daily care while the child(ren) is/are in their care.",
  },
  {
    category: "subcategory3-2",
    text: "\"Each party will meaningfully consult with the other on all major health, education and religion decisions respecting the child(ren).\n\nIf the parties cannot agree, they will seek a mediator's assistance to reach an agreement. The cost of mediation will be: [shared equally/paid in proportion to each party's gross annual income].\"",
  },
  {
    category: "subcategory3-2",
    text: "If the parties cannot agree, they will follow the advice of a professional who provides care to the child(ren).",
  },
  { category: "subcategory3-2", text: "If the parties cannot agree, [Name] will make the final decision." },
  {
    category: "subcategory3-3",
    text: "[Name] will make all major health, education and religion decisions respecting the child(ren).",
  },
  { category: "subcategory3-3", text: "[Name] will make decisions about the child(ren)'s daily care." },
  {
    category: "subcategory3-3",
    text: "[Name] will consult with [name of other party] before making any non-emergency decisions in the child(ren)'s life. The consultation shall occur as soon as [name] becomes aware of an issue requiring decision and, if possible, at least 30 days before the date when a decision must be made. [Name of other party] can make inquiries, provide feedback and suggestions. After consulting, [name] will make the decision.",
  },
  {
    category: "subcategory3-3",
    text: "[Name] can choose a daycare or pre-school program, and pre- and after-school care for the child(ren).",
  },
  { category: "subcategory3-3", text: "[Name] can enroll the child(ren) in French Immersion." },
  {
    category: "subcategory3-3",
    text: "[Name] can choose any professionals or service providers for the child(ren), including the doctor, dentist, counsellor, tutors, etc. [Name] has the authority to determine the need for professional involvement. Except for emergency medical treatment, [name of other party] cannot take the child(ren) to any health care provider or counsellor, without [name]'s prior consent.",
  },
  {
    category: "subcategory3-4",
    text: "In an emergency, each party can authorize the child(ren)'s emergency medical care.",
  },
  {
    category: "subcategory3-4",
    text: "In an emergency, the party solely authorizing emergency medical care must notify the other party as soon as it is practical to do so, considering the nature of the emergency.",
  },
  {
    category: "category4",
    text: "Each party is can make inquiries and receive information from the child(ren)'s educators, counselors, care-givers, healthcare providers and religious leaders.",
  },
  {
    category: "category4",
    text: "Each party can receive the child(ren)'s school report cards, medical reports, dental reports, specialist reports, and information regarding the child(ren)'s recreational activities.",
  },
  {
    category: "category4",
    text: "[Name] will keep [name of other party] informed about the institutions and individuals involved with the child(ren). Institutions include schools, hospitals, churches, care programs, and recreational associations. Individuals include teachers, school staff, day care and child care staff, doctors, dentists, medical specialists, counselors, therapists, coaches, and trainers. Information will be in writing. Information will include the name, address and contact details (telephone, fax, email, and website).",
  },
  {
    category: "category4",
    text: "If contacts are required for the child(ren), both parties will be listed as contacts.",
  },
  {
    category: "category4",
    text: "[Name] will notify [name of other party] in writing about all the child(ren)'s medical and professional appointments as soon as they are booked and provide full particulars immediately after the appointment.",
  },
  {
    category: "category4",
    text: "Both parties can speak directly with the child(ren)'s teachers, caregivers, physicians, dentists, and other healthcare providers about the child(ren).",
  },
  {
    category: "category4",
    text: "This order is each party's consent and authorization to all persons, including teachers, doctors, dentists and others involved with the child(ren), to speak fully and openly with both parties.",
  },
  {
    category: "category4",
    text: "Each party must immediately notify the other if the child(ren) has/have a serious illness or accident while in his or her care.",
  },
  { category: "category5", text: "Both parties may attend the child(ren)'s appointments." },
  {
    category: "category5",
    text: "Both parties may attend the child(ren)'s activities, such as concerts, recitals, games, practices, medical and dental.",
  },
  {
    category: "category5",
    text: "Both parties may attend the child(ren)’s functions, such as their birthday parties.",
  },
  {
    category: "category5",
    text: "Both parties may attend meetings relating to the child(ren), such as parent-teacher meetings.",
  },
  {
    category: "category6",
    text: "Each party will make and maintain a valid Will providing the other party will be guardian of the child(ren)’s property on his or her death.",
  },
  {
    category: "subcategory7-1",
    text: "Neither party will speak negatively to, or about, the other party or permit others to do so in the child(ren)’s presence.",
  },
  {
    category: "subcategory7-1",
    text: "Neither party will allow any person to make negative or disparaging comments to the child(ren) about the other party or members of their family or household.",
  },
  {
    category: "subcategory7-1",
    text: "At all times, the parties will encourage the child(ren) to have a positive and respectful relationship with the other party and members of the other party’s family and household.",
  },
  {
    category: "subcategory7-1",
    text: "Neither party will discuss adult matters with the child(ren) or in their presence.",
  },
  {
    category: "subcategory7-1",
    text: "The parties will not communicate about issues or non-emergency arrangements when the child(ren) is/are present or nearby.",
  },
  {
    category: "subcategory7-1",
    text: "The parties will not involve the child(ren) in conveying messages or documents between them.",
  },
  {
    category: "subcategory7-1",
    text: "The parties will not question the child(ren) or comment to the child(ren) about the other party.",
  },
  { category: "subcategory7-1", text: "The parties will communicate civilly and will only discuss the child(ren)." },
  {
    category: "subcategory7-1",
    text: "The parties will communicate mainly by email. For time-sensitive matters, they will call or text and a response will be provided as soon as the party receives the communication.",
  },
  { category: "subcategory7-1", text: "Each party will check their email at least once daily." },
  {
    category: "subcategory7-1",
    text: "Each party will respond to email inquiries within 24 hours of receipt (except during vacations).",
  },
  { category: "subcategory7-1", text: "Email communications will be brief, civil and focused on parenting." },
  {
    category: "subcategory7-1",
    text: "The child(ren) will not be shown emails and written communications between the parties.",
  },
  { category: "subcategory7-2", text: "Each party can communicate with the child(ren) at any time by any means." },
  {
    category: "subcategory7-2",
    text: "Each party can communicate with the child(ren) at reasonable times by telephone, Facetime, Skype, or other means.",
  },
  {
    category: "subcategory7-2",
    text: "Each party can communicate with the children by telephone, Facetime, Skype or other means at the following times: [specify times].",
  },
  {
    category: "subcategory7-2",
    text: "Each party can communicate with the child(ren) by telephone, Facetime, Skype or other means on the following terms: [specify terms - times and conditions].",
  },
  {
    category: "subcategory7-2",
    text: "Unless there is an emergency, neither party will communicate with the child(ren) when the child(ren) [is/are] in the other party’s care.",
  },
  {
    category: "subcategory7-3",
    text: "The parties will share relevant information in a bound journal. Relevant information is information about everyday issues that affect the child(ren)’s care and upbringing. Journal entries are to be in pen and dated. Neither party may change or delete any journal entry. Journal entries must be child-focused.",
  },
  {
    category: "subcategory7-3",
    text: "Unless there is an emergency, the parties communication must be in writing (e-mail or text).",
  },
  {
    category: "subcategory7-3",
    text: "Unless there is an emergency, the parties will communicate through a software program, such as Our Family Wizard.",
  },
  { category: "subcategory7-3", text: "If there is an emergency, the parties can communicate by telephone." },
  {
    category: "subcategory7-4",
    text: "The parties will communicate through [name of third party] or another person agreed upon between them in advance.",
  },
  {
    category: "subcategory8-1",
    text: "When a party proposes to travel with the child(ren), he or she will provide an itinerary to the other party a minimum of [number] days before the proposed travel.",
  },
  {
    category: "subcategory8-1",
    text: "The itinerary will contain the dates of travel, the destination, the address at the destination where the child(ren) will be staying, and a telephone number where the child can be reached.",
  },
  {
    category: "subcategory8-2",
    text: "The child(ren) can travel within Nova Scotia when it does not interfere with their scheduled time with the other party.",
  },
  {
    category: "subcategory8-3",
    text: "The child(ren) can travel outside Nova Scotia and within Canada, without the written consent of the other party.",
  },
  {
    category: "subcategory8-3",
    text: "The child(ren) can only travel outside Nova Scotia and within Canada with the written consent of the other party.",
  },
  {
    category: "subcategory8-4",
    text: "Each party will provide the other with no less than [number] days’ notice of any proposal to travel with the child(ren) outside Canada, along with a proposed itinerary.",
  },
  {
    category: "subcategory8-4",
    text: "A party may not unreasonably withhold consent for the child(ren) to travel outside Canada, if proposed travel is in the child(ren)’s best interests.",
  },
  {
    category: "subcategory8-4",
    text: "Both parties will cooperate in signing documents for the child(ren)’s international travel (i.e., passport applications, passport renewal applications, travel consent letters).",
  },
  {
    category: "subcategory8-4",
    text: "Both parties will facilitate the child(ren)’s international travel by providing the child(ren)’s passport(s) at least [number] days before the departure date.",
  },
  {
    category: "category9",
    text: "Both parties will cooperate in obtaining and renewing the child(ren)’s passport(s).",
  },
  { category: "category9", text: "[Name] will store the child(ren)’s passport(s) until they are needed for travel." },

  { category: "subsubcategory10-8-1", text: "The child(ren)’s primary residence will be with [name]." },

  {
    category: "subsubcategory10-8-1",
    text: `The child(ren) will have parenting time with [name] as follows:<br/><br/>
      <div class="indented">
        Starting [insert date], on a two-week rotating schedule as follows:<br/><br/>
        <div class="indented">
          Week One: [day] at [time] to [day] at [time].<br>
          Week Two: [day] at [time] to [day] at [time].
        </div>
      </div>`,
  },

  {
    category: "subsubcategory10-8-1",
    text: `<div style="margin-left: 24px;">
      The child(ren) will have parenting time with [name] as follows:<br/>
      <br/> 
      <span style="margin-left: 12px;">Every second weekend from [day] at [time] to [day] at [time], starting on [insert start date];</span>
      <div class="indented"></div>`,
  },

  {
    category: "subsubcategory10-1-1",
    text: "Starting [insert start date], the child(ren) will spend equal amounts of time in each party’s home, on a week-on, week-off schedule, with exchanges on [day] at [time].",
  },
  {
    category: "subsubcategory10-1-2",
    text: '"The child(ren) will spend equal amounts of time in both parties’ homes, on a 4/3/3/4 schedule, so the child(ren) are with [name] starting on [date] for four overnights; with [name of other party] for the next three overnights; with [name] for the next three overnights; and with [name of other party] for the next four overnights and so on.\nExchanges will occur at [time]."',
  },
  {
    category: "subsubcategory10-1-3",
    text: '"The parties will spend parenting time with the child(ren) as follows:\n\nThe child(ren) will be with [name] from [day] at [time] to [day] at [time] and with [name of other party] from [day] at [time] to [day] at [time]."',
  },
  {
    category: "subsubcategory10-2-1",
    text: '"[Name]’s parenting time with the child(ren) will be supervised. Supervisors may be [names] and any other person the parties agree upon;\n\nSupervised parenting time will be: [day(s)] at [time(s)] to [day(s)] at [time(s)]. "',
  },
  {
    category: "subsubcategory10-2-1",
    text: "Supervised parenting time will occur as agreed between the parties and the supervisor.",
  },
  {
    category: "subsubcategory10-2-2",
    text: "[Name]’s parenting time with the child(ren) will occur through Veith House’s supervised access program.",
  },
  {
    category: "subsubcategory10-2-2",
    text: "The first three visits will be no more than one hour long and the other visits will be for the maximum amount allowed by Veith House’s supervised access program.",
  },
  { category: "subsubcategory10-2-2", text: "Visits will be at least [weekly/bi-weekly/bi-monthly/monthly]." },
  { category: "subsubcategory10-2-2", text: "Visits will start no earlier than [date]." },
  {
    category: "subsubcategory10-2-2",
    text: "This order for supervised access through Veith House’s supervised access program may be renewed after 12 visits.",
  },
  {
    category: "subsubcategory10-2-2",
    text: "Either party may ask to renew this order for supervised access through Veith House’s supervised access program.",
  },
  { category: "subsubcategory10-2-2", text: "The parties will return to court for a conference on [date]." },
  {
    category: "subsubcategory10-2-3",
    text: "The parties will use Veith House’s supervised access exchange program. [Specify details].",
  },
  {
    category: "subcategory10-3",
    text: "[Name of non-parent/non-guardian party] will have contact time with the child(ren), as follows: [specify].",
  },
  {
    category: "subcategory10-3",
    text: "[Name of non-parent/non-guardian party]’s contact time is subject to these conditions: [specify].",
  },
  {
    category: "subcategory10-4",
    text: `<p>[Name] will have interaction with the child(ren). [Name] may:</p>
      <div class="indented">
        <ol class="ms-welcome__features" type="a">
          <li>attend specified activities;</li>
          <li>send gifts to the child(ren);</li>
          <li>receive gifts from the child(ren);</li>
          <li>communicate with the child(ren) by telephone, Skype, or Facetime;</li>
          <li>communicate with the child(ren) by cards, letters, or email; and</li>
          <li>receive photographs of the child(ren) and information about the children’s health, education, and well-being from a designated source.</li>
        </ol>
      </div>`,
  },

  { category: "10-5-1", text: "[Name] will transport the child(ren) to and from [specify location]." },
  {
    category: "subsubcategory10-5-1",
    text: "Each party will pick up the child(ren) from [specify location] at the beginning of his or her parenting time.",
  },
  {
    category: "subsubcategory10-5-1",
    text: "The parties will meet at an agreed-upon neutral location [or specify location] to exchange the child(ren).",
  },
  { category: "subsubcategory10-5-2", text: "The parties will agree on a person to transport the child(ren)." },
  { category: "subsubcategory10-5-2", text: "[Name] may not transport the children." },
  {
    category: "subsubcategory10-6-1",
    text: `<p>Each party will inform the other of all changes to his or her:</p>
      <div class="indented">
        <ul class="ms-welcome__features">
          <li>home address</li>
          <li>home phone number</li>
          <li>work address</li>
          <li>work phone number</li>
          <li>or any other means of contact such as cell phone numbers, fax numbers, or email addresses.</li>
        </ul>
      </div>`,
  },

  {
    category: "subsubcategory10-6-2",
    text: "Neither party will schedule child(ren)'s activities during the other's time with the child(ren), unless the other party agrees.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "Neither party will unreasonably withhold their consent to scheduling an activity for the child(ren).",
  },
  {
    category: "subsubcategory10-6-2",
    text: "Where the parties have agreed to an activity, each party is responsible for transporting the child(ren) to the activity during his or her parenting time.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "The parties shall share selection of the child(ren)'s extracurricular activities as follows:",
  },
  { category: "subsubcategory10-6-2", text: "Each year they will take turns selecting activities." },
  {
    category: "subsubcategory10-6-2",
    text: "In even-numbered years, [name] will select first, and make a selection by January 31. [Name of other party] will select second by March 31. [Name] will select third by May 31. [Name of other party] will select fourth by July 31. If a party misses a deadline for selection, the other party may proceed with his or her selection. In odd-numbered years, the pattern is reversed.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "Unless the parties agree otherwise, neither party shall be entitled to select more than two activities for the child(ren) annually.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "Selections may be for an activity that occurs during any part of the year. A selection may not overlap or conflict with the schedule for a previously selected activity.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "Only the party who has physical care of the child(ren) during the activity may attend the activity. Both parties may attend school events, religious events, play offs, final competitions and presentations.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "The party who has physical care of the child(ren) is responsible for preparing the child(ren) for the activity.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "Each party will use best efforts to ensure the child(ren) attend(s) most activity commitments during the time the child(ren) are with him/her.",
  },
  {
    category: "subsubcategory10-6-2",
    text: "If a party has difficulty arranging transportation to an activity but does not otherwise have plans involving the child(ren), the other party will be asked to transport the child(ren) to the activity.",
  },
  {
    category: "subsubcategory10-6-3",
    text: "During work hours when one party is working and the other is not, the party who is not working may have time with the child(ren).",
  },
  {
    category: "subsubcategory10-6-3",
    text: "Outside of work hours if [Name] is not available to care for the child(ren) for more than [number] hours, [Name of other party] may have time with the child(ren).",
  },
  {
    category: "subsubcategory10-6-3",
    text: "Grandparents:\n\nThis clause does not apply to reasonable time the child(ren) may spend with their grandparents.",
  },
  {
    category: "subsubcategory10-7-1",
    text: "The parties will follow all provincial laws for the child(ren)'s use of motor vehicles, including ATVs and 4-wheelers.",
  },
  { category: "subsubcategory10-7-1", text: "The parties will follow all provincial laws about car seats." },
  {
    category: "subsubcategory10-7-2",
    text: "Neither party will consume any alcohol, non-prescription drugs or marijuana, during their parenting time.",
  },
  {
    category: "subsubcategory10-7-2",
    text: "Neither party will consume alcohol, non-prescription drugs or marijuana, for [number] hours before their parenting time.",
  },
  {
    category: "subsubcategory10-7-2",
    text: "Neither party will consume alcohol or marijuana to excess during their parenting time.",
  },
  {
    category: "subsubcategory10-7-2",
    text: "Each party will use prescribed medications as required for [number] of hours before and during their parenting time.",
  },
  { category: "subsubcategory10-7-3", text: "Physical discipline will not be used on the child(ren)." },
  {
    category: "subcategory11-1",
    text: "[Grandparent(s)' name(s)] has/have leave to apply for [custody/access/interaction/contact time] with [child(ren)'s name(s)].",
  },
  {
    category: "subcategory11-1",
    text: "[Grandparent(s)' name(s)] will have joint custody of [child(ren)'s name(s)] with [name(s) of other parties with custodial rights].",
  },
  {
    category: "subcategory11-2",
    text: "[Grandparent(s)' name(s)] will have contact time with the child(ren) at the following times [and subject to the following conditions]: [dates, times and conditions, if any, of contact time].",
  },
  { category: "subcategory11-3", text: "[Grandparent(s)' name(s)], will have interaction with the child(ren)." },
  {
    category: "subcategory11-3",
    text: `<p>[Grandparent(s)' name(s)] may:</p>
      <div class="indented">
        <ol class="ms-welcome__features" type="a">
          <li>attend specified activities;</li>
          <li>send gifts to the child(ren);</li>
          <li>receive gifts from the child(ren);</li>
          <li>communicate with the child(ren) by telephone, Skype, or Facetime;</li>
          <li>communicate with the child(ren) by cards, letters, or email;</li>
          <li>receive photographs of the child(ren) and information about the children’s health, education, and well-being from a designated source.</li>
        </ol>
      </div>`,
  },
  {
    category: "subsubcategory12-1-1",
    text: "[Name]'s annual income is $[amount] for the purpose of determining child support.",
  },
  {
    category: "subsubcategory12-1-2",
    text: "[Name]'s annual income is less than the lowest income that requires support to be paid on the Nova Scotia Tables of the Child Support Guidelines.",
  },
  {
    category: "subsubcategory12-1-3",
    text: "[Name]'s annual income is agreed by the parties to be $ [amount], without the court's determination.",
  },
  {
    category: "subsubcategory12-1-4",
    text: "[Name]'s an annual income is $[amount], calculated as an average of his/her employment income earned from [employment name] for [list years].",
  },
  {
    category: "subsubcategory12-1-4",
    text: "[Name]'s annual income is $[amount], determined by the court based on the pattern of annual income for [list years].",
  },
  {
    category: "subsubcategory12-1-5",
    text: "[Name]'s annual income is $[amount], based on the parties' agreement that, on average, [name] earns this amount from self-employment.",
  },
  {
    category: "subsubcategory12-1-6",
    text: "[Name]'s annual income is $[amount]. This amount is imputed under clause [19(1)[insert clause] of the Child Maintenance Guidelines / Federal Child Support Guidelines.",
  },
  {
    category: "subcategory12-2",
    text: "[Payor] will pay monthly child support of $[amount] to [recipient] under the Nova Scotia Child Maintenance Guidelines / Federal Child Support Guidelines and in accordance with the Nova Scotia table, starting [date].",
  },
  {
    category: "subsubcategory12-2-1",
    text: "[Payor] will pay child support of $[amount] each month to [recipient] under the Nova Scotia Child Maintenance Guidelines / Federal Child Support Guidelines and in accordance with the Nova Scotia table, starting [date]. Payments of $[amount] will be made every two weeks.",
  },
  {
    category: "subsubcategory12-2-2",
    text: "[Payor] will pay monthly child support of $[amount] to [recipient] under the [Nova Scotia Child Maintenance Guidelines / Federal Child Support Guidelines] based on an annual income in excess of $150,000.00, starting [date].",
  },
  {
    category: "subsubcategory12-2-3",
    text: "[Name] pays the following expenses which directly or indirectly benefit the child(ren): [list expenses and amounts annually paid].\nUnder subsection 15.1(7) of the Divorce Act [if an originating child support application], having regard to the applicable Guidelines, [Name]'s payment of these expenses constitutes reasonable arrangements for the child(ren)'s support and [Name] will pay an amount of child support that is different from the amount determined in accordance with the applicable Guidelines.\nUnder subsection 17(6.2) of the Divorce Act [if a child support variation application], having regard to the applicable Guidelines, [Name]'s payment of these expenses constitutes reasonable arrangements for the child(ren)'s support and [Name] will pay an amount of child support that is different from the amount determined in accordance with the applicable Guidelines.\nUnder subsection 15.1(7) of the Parenting and Support Act and with the parties' consent, having regard to the applicable Guidelines, [Name]'s payment of these expenses constitutes reasonable arrangements for the child(ren)'s support and [Name] will pay an amount of child support that is different from the amount determined in accordance with the applicable Guidelines.",
  },
  {
    category: "subsubcategory12-2-3",
    text: "Under subsection 15.1(7) of the Divorce Act [if an originating child support application], having regard to the applicable Guidelines, [Name]'s payment of these expenses constitutes reasonable arrangements for the child(ren)'s support and [Name] will pay an amount of child support that is different from the amount determined in accordance with the applicable Guidelines.",
  },
  {
    category: "subsubcategory12-2-3",
    text: "Under subsection 17(6.2) of the Divorce Act [if a child support variation application], having regard to the applicable Guidelines, [Name]'s payment of these expenses constitutes reasonable arrangements for the child(ren)'s support and [Name] will pay an amount of child support that is different from the amount determined in accordance with the applicable Guidelines.",
  },
  {
    category: "subsubcategory12-2-3",
    text: "Under subsection 15.1(7) of the Parenting and Support Act and with the parties' consent, having regard to the applicable Guidelines, [Name]'s payment of these expenses constitutes reasonable arrangements for the child(ren)'s support and [Name] will pay an amount of child support that is different from the amount determined in accordance with the applicable Guidelines.",
  },
  {
    category: "subsubcategory12-2-4",
    text: "Taking into account the amounts set out in the applicable tables for each of the parties, the increased costs of shared custody arrangements and the condition, means needs and other circumstances of each party and of the child(ren) for whom support is sought, [payor] will pay monthly child support of $[amount] starting [date], based on the amounts set out in the applicable tables for each of the parties.",
  },
  {
    category: "subcategory12-3",
    text: "[Payor] owes [recipient] arrears of child support of $[amount], calculated as follows:",
  },
  {
    category: "subcategory12-3",
    text: "TABLE - ARREARS",
    table: {
      header: ["Dates", "Amount Previously Ordered", "Amount Paid", "Arrears", "Total"],
      rows: [["", "", "", "", ""]],
    },
  },
  {
    category: "subcategory12-3",
    text: "[Payor] will pay child support arrears to [recipient] of $ [amount] each month. Payments are due on [date] each month, starting [date] for [number] months until [date].",
  },
  {
    category: "subcategory12-4",
    text: "[Payor] owes [recipient] retroactive child support of $[amount], calculated as follows:",
  },
  {
    category: "subcategory12-4",
    text: "TABLE - SUPPORT",
    table: {
      header: ["Dates", "Retroactive Award", "Amount Paid", "Retroactive Amount", "Total"],
      rows: [["", "", "", "", ""]],
    },
  },

  {
    category: "subcategory12-4",
    text: "[Payor] will pay retroactive child support to [recipient] of $[amount] each month. Payments are due on [date] each month, starting [date] for [number] months until [date].",
  },
  {
    category: "subcategory12-5",
    text: '"[Payor] will pay monthly child support of $[amount] to [recipient] as a contribution to the following special / extraordinary expense:\n\n[Child(ren)\'s name(s)]\nDescription of Expense: [description] Total monthly net expense: $ [amount] Monthly amount to be paid: $ [amount] Percentage: % [percentage]"',
  },
  {
    category: "subcategory12-5",
    text: "TABLE - CH. SUPPORT",
    table: {
      header: [
        "Child(ren's name(s)",
        "Description of Expense",
        "Total Monthly Net Expense",
        "Monthly Amount to Be Paid",
        "Percentage",
      ],
      rows: [["", "", "", "", ""]],
    },
  },
  { category: "subcategory12-6", text: "[Payor] lives in Nova Scotia." },
  {
    category: "subcategory12-6",
    text: "[name of person] shares household expenses with [payor] and has an annual income of $ [amount].",
  },
  { category: "subcategory12-6", text: "[Recipient] lives in Nova Scotia." },
  {
    category: "subcategory12-6",
    text: "[name of person] shares household expenses with [recipient] and has an annual income of $ [amount].",
  },
  {
    category: "subcategory12-6",
    text: "[Payor]'s household has a higher standard of living than [recipient]'s household.",
  },
  {
    category: "subcategory12-6",
    text: "[Payor/recipient/child] would suffer undue hardship by reason of [use language of subsection 10(2) of the Guidelines] if child support was determined under section [3, 4, 5, 8, 9 or 10] of the Child Maintenance Guideline / Federal Child Support Guidelines].",
  },
  { category: "subsubcategory12-7-1", text: "[Child, (birthdate)] has an annual income of $[amount]." },
  {
    category: "subsubcategory12-7-1",
    text: "[Payor] will pay monthly child support of $[amount] to [recipient]. Payments are due on the [date] of each month, starting [date].",
  },
  {
    category: "subsubcategory12-7-1",
    text: "[Child (birthdate) or Name of recipient] will provide confirmation of [child's name] full/part- time enrollment in a post-secondary institution by [date] annually. On confirmation, [Payor] will pay monthly child support of $[amount] to [recipient]. Payments are due on the [date] of each month, starting [date].",
  },
  {
    category: "subsubcategory12-7-2",
    text: "The child(ren) [name, birthdate] [has/have] reached the age of majority, is/are employed on a full-time basis and [does/do not] attend(s) an educational institution. Neither party will pay child support.",
  },
  {
    category: "subsubcategory12-7-2",
    text: "If the child(ren) resume full/part-time studies at a post-secondary institution, either party may make apply to the court for child support.",
  },
  {
    category: "subsubcategory12-7-3",
    text: "The child(ren), [name, birthdate], is/are over the age of majority and intend(s) to pursue a post- secondary education on a full/part-time basis starting [date].",
  },
  {
    category: "subsubcategory12-7-4",
    text: "\"The child(ren), [name, birthdate], [is/are] enrolled on a full/part-time basis at [name of post- secondary institution] and remain(s) dependent.\n\n[insert paragraph for payment of child support, using the child's name instead of the party's]\"",
  },
  {
    category: "subcategory12-8",
    text: "No later than [date] each year, [name] will provide [name of other party] with a copy of his/her income tax return, completed and with all attachments, even if the return is not filed with the Canada Revenue Agency. This disclosure will include business financial statements and records for any corporation controlled by [name].",
  },
  {
    category: "subcategory12-8",
    text: "No later than 15 days after they are received, [name] will provide [name of other party] with a copy of all notices of assessment or re-assessment received from the Canada Revenue Agency.",
  },
  {
    category: "subsubcategory12-9-1",
    text: 'The most recent order requiring [name] to pay child support is dated [date] and it is referred to in this order as "the child support order".',
  },
  {
    category: "subsubcategory12-9-1",
    text: 'In this order "review date" means, in relation to a recalculation authorization order, the day and month in every year that is the the anniversary of the issuance of the recalculation authorization order.',
  },

  {
    category: "subsubcategory12-9-2",
    text: `On the review date, the Recalculation Clerk will review and recalculate the table amount of child support payable under the Child Support Guidelines by applying the following process:<br/><br/>
          <div style="padding-left: 20px;">
            <ol style="list-style-type: decimal;">
              <li>In each year, no later than 60 days before the review date, [name] will provide to the Recalculation Clerk at Nova Scotia Administrative Recalculation of Child Support Program, P.O. Box 23, Halifax, Nova Scotia, B3J 2L4, the following financial information that will permit calculation of annual income in accordance with section 16 of the Child Support Guidelines for the most recent taxation year:
                <ol style="list-style-type: lower-alpha;">
                  <li>A copy of [name]'s personal income tax return, as filed, and a copy of each notice of assessment and re-assessment issued to the payor, including all schedules and attachments.</li>
                  <li>If [name] has filed an income tax return but has not yet received a notice of assessment or reassessment, a copy of the income tax return, including all schedules and attachments, and any document or documents that further set out his/her annual income from all sources.</li>
                  <li>If the annual recalculation takes place before [name] has filed an income tax return, any document or documents that set out his/her annual income from all sources.</li>
                </ol>
              </li>
              <li>If [name] does not provide financial information sufficient to determine his/her annual income from all sources for the most recent taxation year in accordance with section 16 of the Child Support Guidelines, his/her income will be deemed to be 10% more than the annual income attributed to him/her in the more recent of the previous child support order or recalculated order.</li>
              <li>[Name] will become liable to pay the recalculated amount of child support 31 days after both parties are notified of the recalculation.</li>
              <li>If a recalculation order is made, a copy of the recalculated order will be sent to the parties at their designated addresses.</li>
            </ol>
          </div>`,
  },

  {
    category: "subsubcategory12-9-3",
    text: "If the Recalculation Clerk has not recalculated the child support to be paid, the Clerk will send a statement to the parties explaining why no recalculation was made.",
  },
  {
    category: "subsubcategory12-9-4",
    text: "A party who does not agree with the recalculated amount may object within 30 days after receiving notification of the recalculated amount, by making an application to vary, rescind or suspend the recalculated order.",
  },
  {
    category: "subsubcategory12-9-5",
    text: "A copy of this order will be filed with the Recalculation Clerk for the purpose of referral to the administrative recalculation program no later than five working days after the order is made.",
  },
  {
    category: "subsubcategory12-9-5",
    text: `<div class="indented">
      Both parties will notify the Recalculation Clerk at the Nova Scotia Administrative Recalculation of Child Support Program, P.O. Box 23, Halifax, Nova Scotia, B3J 2L4, in writing of a change to any of the following contact information no later than 10 days after the date of the change:<br/>
      <span class="indent">i. street address,</span><br/>
      <span class="indent">ii. email address,</span><br/>
      <span class="indent">iii. telephone number,</span><br/>
      <span class="indent">iv. fax number.</span><br/>
    </div>`,
  },

  {
    category: "category13",
    text: "Both parties will maintain their employment-based health insurance for the child(ren) for so long as it is available.",
  },
  {
    category: "category13",
    text: "Each party will sign any documents allowing the other party to deal directly with the health insurance provider.",
  },
  {
    category: "category13",
    text: "A party who is reimbursed for health expenses paid by the other will immediately forward the reimbursement to the other.",
  },
  {
    category: "subcategory14-1",
    text: "[Name] will keep life insurance with a face value of no less than $[amount] in place for the equal benefit of the child(ren) with [name of other party] as trustee while the child(ren) is/are entitled to support.",
  },
  {
    category: "subcategory14-1",
    text: "Each party will designate the child(ren) as beneficiary(ies) of the first $[amount] of life insurance on his or her life, with the other party and a nominee designated by the insured as joint trustees, holding the insurance in trust for the child(ren). This obligation continues while the child(ren) are entitled to support. The amount of life insurance may be reviewed.",
  },
  {
    category: "subcategory14-1",
    text: "The parties will provide each other with proof of life insurance annually by [date].",
  },
  {
    category: "subcategory14-2",
    text: "[Name] will keep life insurance with a face value of no less than $[amount] in place for [name of other party]’s benefit while she/he is entitled to spousal support.",
  },
  {
    category: "subcategory15-1",
    text: "[Name] is entitled to spousal support on a [compensatory/contractual/non-compensatory/mixed compensatory and non-compensatory] basis.",
  },
  { category: "subcategory15-2", text: "[Name] is not entitled to spousal support." },
  { category: "subcategory15-2", text: "Neither party is entitled to spousal support." },
  {
    category: "subcategory15-3",
    text: "[Name] is entitled to spousal support on a [compensatory/contractual/non-compensatory/mixed compensatory and non-compensatory] basis. [Name] has no current ability to pay spousal support. Spousal support is suspended until further court order.",
  },
  {
    category: "subcategory15-4",
    text: '"\n[Payor] will pay [recipient] monthly spousal support of $[amount]. Payments will be made on the [day] of each month starting on [date]. "',
  },
  {
    category: "subcategory15-4",
    text: "[Payor] will pay [recipient] monthly spousal support of $[amount]. Payments will be made in installments of $[amount], payable on [days] starting on [date].",
  },
  {
    category: "subcategory15-5",
    text: "Spousal support will be reviewed by the court on [date], having regard to [explain the circumstances that make a review order appropriate: Leskun, 2006 SCC 25].",
  },
  {
    category: "subcategory15-6",
    text: "[Payor] will pay [recipient]] $[amount] for spousal support arrears accumulated during from [start date] to [end date].",
  },
  {
    category: "subcategory15-7",
    text: "[Payor] will pay [recipient] lump sum spousal support of $[amount] to be paid no later than [date].",
  },
  {
    category: "subsubcategory15-8-1",
    text: "Spousal support will end on the earlier/earliest of the following: [list events].",
  },
  { category: "subsubcategory15-8-2", text: "Spousal support will end on [date]." },
  {
    category: "subcategory15-9",
    text: "[Payor’s name] will reimburse [recipient’s name] for all lost tax credits and benefits and all consequent income tax, interest, penalties and all other costs incurred as a result of claiming spousal support during the retroactive period calculated by treating that spousal support as the last dollars received in the year.",
  },
  {
    category: "subcategory15-9",
    text: '"[Name of payor] will reimburse [name of recipient] for all lost tax credits and benefits and all consequent income tax, interest, penalties and all other costs incurred as a result of claiming spousal support during the retroactive period. Consequent income tax, interest and penalties will be calculated by treating the retroactive spousal support as the last dollars received in the year. For greater clarity, the reimbursement will be calculated as follows:\n\n1. [recipient’s name]’s income tax will be calculated including all relevant income, deductions and credits.\n\n2. [recipient’s name]’s income tax will be calculated including all relevant income, deductions and credits including the retroactive spousal support.\n\n3. The difference between the total tax payable from these two calculations, plus interest and penalties will represent the amount of the reimbursement."',
  },
  { category: "subcategory16-1", text: "All support payments will be made payable to the [name of recipient]." },
  {
    category: "subcategory16-1",
    text: '"Support payments will be sent by the [name of payor] to the Maintenance Enforcement Program,\nP.O. Box 803, Halifax, Nova Scotia B3J 2V2, while the order is filed for enforcement with the Director."',
  },
  {
    category: "subcategory16-1",
    text: "A court officer will send the parties’ current designated addresses and a copy of this order to the Maintenance Enforcement Program as required by section 9 of the Maintenance Enforcement Act.",
  },
  {
    category: "subcategory16-1",
    text: "Each party will advise the Maintenance Enforcement Program of every change to their address, within 10 days of the date of the change, as required by section 42(1) of the Maintenance Enforcement Act.",
  },
  {
    category: "subcategory16-1",
    text: "The Maintenance Enforcement Program will send all correspondence to the parties at their current designated addresses.",
  },
  {
    category: "subcategory16-1",
    text: '"In accordance with the Nova Scotia Maintenance Enforcement Program (MEP) policy, the payor is required to make support payments to MEP. MEP will forward the support payments to the recipient, keep records of the payments made, and enforce the order or agreement on behalf of the recipient, unless otherwise directed by the court."',
  },
  { category: "subcategory16-2", text: "The parties may agree to opt out of the Maintenance Enforcement Program." },
  {
    category: "subcategory16-3",
    text: '"Neither party will start or continue any legal proceedings or make any demand for payment in respect of any support for which an order or agreement has been made in this case, except as provided in the Maintenance Enforcement Act."',
  },
  {
    category: "subcategory16-4",
    text: "The parties consent to the disclosure of their personal information to the Maintenance Enforcement Program and to the release of information about the parties by the Maintenance Enforcement Program, in accordance with the Freedom of Information and Protection of Privacy Act and the Maintenance Enforcement Act.",
  },
  {
    category: "subcategory17-1",
    text: "This order replaces all previous agreements or orders made in respect of child support.",
  },
  {
    category: "subcategory17-1",
    text: "This order replaces all previous agreements or orders made in respect of spousal support.",
  },
  {
    category: "subcategory17-2",
    text: "Any prior agreement or order for support not specifically addressed in this order continues in full force and effect.",
  },
  {
    category: "subsubcategory17-3-3",
    text: "[Name of other party] will provide [Name] with a quit claim deed in escrow to be used to secure [Name of other party]’s release from the mortgage covenants and [all other encumbrances] against the matrimonial home.",
  },
  {
    category: "subsubcategory17-3-3",
    text: "[Name] will provide [Name of other party] with sufficient proof of these releases before registering the quit claim deed.",
  },
  {
    category: "subsubcategory17-3-3",
    text: "[Name] must provide [Name of other party] with a copy of all registered releases and the registered quit claim deed.",
  },
  {
    category: "subsubcategory17-3-4",
    text: "Title to property described in Schedule “A” (called the “matrimonial home”) shall be transferred to [name] absolutely.",
  },
  {
    category: "subsubcategory17-3-4",
    text: "[Name of other party] will convey his/her interest in the matrimonial home to [name] by warranty deed within 30 days of receiving the blank deed from [name].",
  },
  {
    category: "subsubcategory17-3-4",
    text: "If the warranty deed is not signed and returned within 30 days, [name] can apply to the court for an order constituting the Sheriff as trustee for [name of other party]’s interest in the matrimonial home, with the power to convey to [name] the [name of other party]’s interest in the matrimonial home.",
  },
  { category: "subsubcategory17-3-5", text: "The matrimonial home will be listed for sale by [date]." },
  {
    category: "subsubcategory17-3-5",
    text: '"1. The matrimonial home will be listed with a realtor of [name]’s choice (called the “listing agent”) within 7 days.\n\n2. [Name] and [name of other party] will execute any documents and do all things required by the listing agent.\n\n3. [Name] will make the matrimonial home available for all showings requested by the listing agent.\n\n4. [Name] will instruct the listing agent to provide the parties with written notice, by email or other electronic means, not later than 24 hours before the listing agent proposes to conduct a showing of the matrimonial home.\n\n5. The parties will make every reasonable effort to sell the matrimonial home without further delay and will accept any legally binding offer made for its purchase at a purchase price of $ or more.\n\n6. The parties will in good faith consider any legally binding bona fide third party offers to purchase the matrimonial home that are below the purchase price of $.\n\n7. Vacant possession of the matrimonial home will occur by [date], when [name] will vacate the matrimonial home. [Name] will continue to be responsible for paying the matrimonial home’s existing mortgage, property taxes and utilities until [the date of vacant possession].\n\n8. From [the date of vacant possession], the parties will have vacant possession of the matrimonial home and they will be equally responsible for paying the matrimonial home’s existing mortgage, property taxes and utilities until the sale date.\n\n9. After [the date of vacant possession], neither party will have exclusive possession of the matrimonial home nor will either occupy the matrimonial home without an order of the court or written',
  },
  {
    category: "subsubcategory17-3-6",
    text: "1. The matrimonial home will be immediately listed for sale for a total sale price of [$price.00]. This listing will end [date].\n\n2. [Name] will provide [name of other party] with the names of three accredited real estate agents by [date]. [Name of other party] will choose the listing agent from the names provided within 72 hours.\n\n3. If [name of other party] does not receive three names from [name], she/he will choose an accredited real estate agent as the listing agent.\n\n4. The listing agent will choose the parties’ lawyer for the sale. This will not be a lawyer or at a firm that has previously represented either party.\n\n5. [Name of other party] can continue to have exclusive possession of the matrimonial home and will continue to be responsible for the mortgage, property taxes and insurance until the matrimonial home is sold.\n\n6. [Name of other party] will cooperate with the listing, showing and sale of the matrimonial home as a condition of his/her continued exclusive possession.\n\n7. The court expressly reserves its jurisdiction to review [name of other party]’s exclusive possession if there are allegations that establish in evidence that [name of other party]’s cooperation is not forthcoming.\n\n8. The court expressly reserves its jurisdiction to review the terms and manner of the matrimonial home’s sale and to direct that the sale occur other than as hereby ordered, including its sale by auction, sheriff or other expedited process.\n\n9. If the matrimonial home has not sold by [date], an order can issue that it be sold in an expedited process. The court may further adjourn the matter if there is an accepted offer with a closing date after [date].\n\n10. [Name] has the exclusive right to accept or reject any offer and will give [name of other party] with a copy of any offer, whether accepted or not, within 18 hours of receipt.\n\n11. [Name] will give [name of other party] a copy of his/her acceptance or rejection of any offer within 18 hours of its execution.\n\n12. If an offer, acceptance or rejection is made on a weekend, [name]’s communication to [name of other party] will be by 10 a.m. on the first working day following the weekend.\n\n13. The net proceeds of sale are the proceeds after the usual adjustments on closing as between the purchaser and vendor, real estate commission, legal fees and disbursements on migrating title and closing, payment of the outstanding mortgage. The net proceeds of sale shall be held in trust by the listing agent’s lawyer and shall be distributed as follows:\n\na. [note adjustments]",
  },
  {
    category: "subsubcategory17-3-7",
    text: "1. The matrimonial home will be sold by the sheriff at public auction on terms similar to a foreclosure sale on a date set by the sheriff no earlier than. The auction will not occur if both parties agree in writing to an alternate disposition.\n\n2. The court expressly reserves jurisdiction under the [Matrimonial Property Act] to any justice of this court to provide further direction or orders related to the matrimonial home’s sale.",
  },
  {
    category: "subsubcategory17-3-8",
    text: "The property shall be sold by written tender as follows:\n\n1. The property shall be advertised once in each of the following publications:\n   a. [newspaper]; and\n   b. [online].\n\n2. [Name] will pay the cost of the advertisements and will be reimbursed for the full amount of the advertisements from the tender proceeds.\n\n3. The advertisement will require that all tenders be submitted to the Prothonotary in [location] for opening on [date] at 12:00 noon and all tenders shall include a certified cheque payable to the Prothonotary for 10% of the tender bid.\n\n4. The highest bid will be awarded the property for a closing date agreed upon by the successful bidder and the vendor’s solicitor.\n\n5. The parties will nominate a representative by no later than 20 days before the opening of the tenders, who will represent them at the property’s showing to be held 4 days before the opening of the tenders between the hours of 1:00 p.m. and 5:00 p.m.\n\n6. Upon the tender being awarded to the successful bidder and the closing date completed, all funds in relation to the sale will be held by the Prothonotary pending further submission to the court with respect to expenses associated with the property or remaining under the terms of the order.\n\n7. The parties will agree on a lawyer to represent the vendor if neither party is the successful bidder and the legal work to effect the sale to the successful bidder will be agreed to by the parties, a neutral lawyer will be retained to complete the closing.\n\n8. Neither party may attend the property, which shall remain in “as is” condition pending sale.",
  },
  {
    category: "subsubcategory17-3-9",
    text: "The parties will share all decisions relating to the matrimonial home’s listing and sale, including, but not limited to, the selection of realtor, the terms of the listing agreement, the sale price, accepting or rejecting offers, making counter-offers, and the closing terms.",
  },
  {
    category: "subsubcategory17-3-10",
    text: "[If the parties cannot agree], [Name] will be responsible for matrimonial home’s sale, including, but not limited to, the selection of realtor, the terms of the listing agreement, the sale price, accepting or rejecting offers, making counter-offers, and the closing terms.",
  },
  {
    category: "subsubcategory17-3-10",
    text: "[Name of other party] will execute all documents reasonably required for the matrimonial home’s listing and sale.",
  },
  {
    category: "subsubcategory17-3-11",
    text: "Until the sale of the matrimonial home is closed, the parties will equally share the following expenses: [delete or add] mortgage, property tax, utilities, property insurance, maintenance, costs to ready for sale.",
  },
  {
    category: "subsubcategory17-3-11",
    text: "[Name] will pay the following expenses relating to the matrimonial home: [delete or add] mortgage, property tax, utilities, property insurance, maintenance, preparation for sale.",
  },
  {
    category: "subsubcategory17-3-11",
    text: "As between the parties, [Name of other party] is not required to contribute to the following expenses relating to the matrimonial home: [delete or add] mortgage, property tax, utilities, property insurance, maintenance, preparation for sale.",
  },
  {
    category: "subsubcategory17-3-11",
    text: "[Name] will indemnify [Name of other party] if [Name of other party] is required to pay any amount to the following expenses relating to the matrimonial home: [delete or add] mortgage, property tax, utilities, property insurance, maintenance, preparation for sale.",
  },
  {
    category: "subsubcategory17-3-11",
    text: "[Name] will immediately take all necessary steps to have [Name of other party] released from liability for the following expenses relating to the matrimonial home: [delete or add] mortgage, property tax, utilities, property insurance, maintenance, preparation for sale.",
  },
  {
    category: "subsubcategory17-3-12",
    text: "The following debts will be paid with the proceeds from the matrimonial home’s sale: [list debts].",
  },
  {
    category: "subsubcategory17-3-12",
    text: "Once the debts have been paid, any money left will be divided equally between the parties.",
  },
  {
    category: "subcategory17-4",
    text: "[Name] will transfer the [describe motor vehicle]’s registration to [Name of other party], executing all documents needed to do so.",
  },
  {
    category: "subcategory17-4",
    text: "[Name of other party] will be the sole owner of the [describe motor vehicle].",
  },
  { category: "subcategory17-4", text: "[Name] will have no claim to [describe motor vehicle]." },
  {
    category: "subcategory17-4",
    text: "[Name] will own the [describe motor vehicle] without further claim by [name of other party].",
  },
  { category: "subcategory17-5", text: "[Name] will own the following registered retirement savings plans: [list]." },
  {
    category: "subcategory17-5",
    text: "[Name of other party] has no claim to the following registered retirement savings plans: [list].",
  },
  {
    category: "subcategory17-5",
    text: "[Name] will equally divide the following registered retirement savings plans by way of tax-deferred inter-spousal rollover: [list RRSP holders and account numbers].",
  },
  {
    category: "subcategory17-5",
    text: "The parties will execute all documents required to divide the registered retirement savings plans.",
  },
  { category: "subcategory17-6", text: "[Names] will close all joint bank accounts: [list]." },
  { category: "subcategory17-6", text: "Any balance in a joint bank account will be retained by [Name]." },
  {
    category: "subcategory17-6",
    text: "Any balance in a joint bank account will be equally divided between the parties.",
  },
  {
    category: "subcategory17-7",
    text: "Each party will retain the household contents currently in [his/her] possession.",
  },
  {
    category: "subcategory17-7",
    text: "Neither party has any claim to the household contents in the possession of the other party.",
  },
  {
    category: "subcategory17-7",
    text: "[Name] will remove the following items from the matrimonial home: [list items or attach list].",
  },
  { category: "subcategory17-7", text: "[Name] will remove items from the matrimonial home no later than [date]." },
  {
    category: "subcategory17-7",
    text: "[Name] will prepare a complete inventory of all household contents and divide the inventory into two lists of equivalent value. The complete inventory and lists must be provided to [name of other party] by [insert date]. By [deadline], [name of other party] must tell [name] which of the two lists he/she wants to keep. Items on the other list will belong to [name].",
  },
  {
    category: "subcategory17-7",
    text: "[Name of other party] has until [specify deadline] to remove the items on the list she/he has chosen. [Name of other party] has [specify] hours to remove the items. Any items which are not removed will belong to [Name] who may do what she/he wishes with them.",
  },
  {
    category: "subcategory17-7",
    text: "[Name] will prepare a complete inventory of all household contents. The parties shall flip a coin to determine who will have first choice of items on the inventory. The parties will alternate choosing items on the inventory until all items are chosen.",
  },
  {
    category: "subcategory17-8",
    text: "As between the parties, [Name] is solely responsible for the following [joint] debt(s): [list].",
  },
  {
    category: "subcategory17-8",
    text: "As between the parties, [Name of other party] is not required to contribute to the following [joint] debts: [list].",
  },
  {
    category: "subcategory17-8",
    text: "[Name] will immediately take all necessary steps to have [Name of other party] released from liability for the following [joint] debts: [list].",
  },
  {
    category: "subcategory17-8",
    text: "[Name] will indemnify [Name of other party] if [Name of other party] is required to pay any amount to the following [joint] debts: [list].",
  },
  {
    category: "subcategory17-8",
    text: "[Name] will have sole responsibility for the following debt(s): [specify debts]. [Name of other party] will have no responsibility to contribute to the following debt(s): [list].",
  },
  {
    category: "subsubcategory17-9-1",
    text: "[Name]’s employment pension with [employer or agency] will be divided at source under the [Pension Benefits Division Act, S.C. 1992, c. 46/Pension Benefits Act, S.N.S. 2011, c. 41/relevant pension legislation] by transferring [percentage]% of the pension benefit earned from [date of cohabitation] to [date of separation].",
  },
  {
    category: "subsubcategory17-9-1",
    text: "If the pension administrator requires a separate pension division order, the parties will consent to it.",
  },
  {
    category: "subsubcategory17-9-1",
    text: "The parties will equally share all costs the pension administrator charges to divide the pension and pay their equal share directly to the pension administrator within ten business days of receiving notice of the cost.",
  },
  {
    category: "subsubcategory17-9-1",
    text: "Either party may apply to the Supreme Court of Nova Scotia (Family Division) for an order for further directions about the interpretation or administration of these provisions, or their implementation by the pension plan administrator.",
  },
  {
    category: "subsubcategory17-9-2",
    text: "[Name] will retain [his / her] employment pension with [employer/agency] and [name of other party] has no claim to it.",
  },
  {
    category: "subsubcategory17-9-3",
    text: "Each party can apply for a division of credits under the Canada Pension Plan, R.S.C. 1985, c. C-8.",
  },
  {
    category: "subcategory18-1",
    text: "This order continues until varied by an order of a court of competent jurisdiction.",
  },
  {
    category: "subcategory18-2",
    text: "A requirement to pay money under this order may be enforced by execution order, or periodic execution order, where it is not enforced under the Maintenance Enforcement Act, S.N.S. 1994-95, c. 6.",
  },
  {
    category: "subcategory18-2",
    text: "The sheriff will do those things necessary to enforce this order and, to do so, may exercise any power of a sheriff permitted in a recovery or execution order.",
  },
  {
    category: "subcategory18-2",
    text: "All constables and peace officers are to do all acts needed to enforce this order’s terms and they have full power and authority to enter upon any lands and premises to enforce this order.",
  },
  { category: "subcategory18-2", text: "DATED at Halifax, Nova Scotia, on , 20.\n\n\nCOURT OFFICER" },
  {
    category: "subcategory18-3",
    text: "When a judge decides a motion or application, each party should review the order so they can confirm its contents reflect the judge’s decision.",
  },
  {
    category: "subcategory18-3",
    text: "When parties review an order where a judge has determined its contents, the parties consent to the form of the order . . . if they had consented to its contents, the judge would not have needed to decide the case.",
  },
  {
    category: "subcategory18-3",
    text: "When parties agree on the terms of the order and no judge was required to make a decision, the order is a consent order and the parties consent to the form of the order (how it is written) and its content (what the order says).",
  },
  {
    category: "subcategory18-3",
    text: `CONSENTED TO:\nCONSENTED TO AS TO FORM AND CONTENT: CONSENTED TO AS TO FORM:\nNAME DATE\nNAME DATE`,
  },
  {
    category: "subsubcategory18-4-1",
    text: "This proceeding is before the court for a determination of custody and parenting arrangements, parenting time, and child support. The parties have reached an agreement through the conciliation process.",
  },
  {
    category: "subsubcategory18-4-1",
    text: "Proof of service of the notice has been established and the application and positions put forward by the parties, through the conciliation process, have been considered by each party.",
  },
];
module.exports = {
  clauses,
};
