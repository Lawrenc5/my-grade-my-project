/* Pre-Technical Studies - topics 4 to 6: enterprise, bookkeeping, computer studies.
   Practice material written for this app in the style of KJSEA. Not copied from any KNEC paper.
   REVIEW: (1) Business size is described by factors only, with no numeric thresholds, because official definitions differ by law and change over time.
   REVIEW: (2) Visual programming block names follow a Scratch-style tool (when green flag clicked, ask and wait, set variable, say, repeat); the block names in the school's own software may differ slightly.
   REVIEW: (3) The text case option names (UPPERCASE, lowercase, Sentence case, Capitalize Each Word) follow common word processors; the exact menu wording may differ.
   REVIEW: (4) SACCO, chama and mobile money are described in general terms only; no interest rates, fees or legal details are given. */
(window.CONTENT = window.CONTENT || []).push(

/* ------------------------------------------------------------------ 4 */
{
  id: "pt-enterprise", subject: "pt", n: 4, grades: [7, 8, 9],
  title: "Enterprise, business plans and money",
  blurb: "Needs and wants, income, entrepreneurs, business plans and managing money well",
  notes: [
    { t: "h", x: "Needs and wants" },
    { t: "p", x: "A **need** is something you must have to live and stay healthy, such as food, clean water, clothing and shelter. A **want** is something you would like to have but can live without, such as a branded cap or a game console. Resources are limited, so we must meet our **needs first** and our wants later." },
    { t: "p", x: "**Example:** Juma has KSh 1 000. Maize flour for supper is a need. A new music speaker is a want. He buys the flour first." },
    { t: "h", x: "Sources of income" },
    { t: "p", x: "**Income** is money a person receives. **Expenditure** is money a person spends. People get income in different ways:" },
    { t: "table", head: ["Source", "Meaning", "Kenyan example"], rows: [["Wages", "Pay for work done, often by the day, hour or piece", "A casual worker paid KSh 600 a day on a farm in Laikipia"], ["Salary", "A fixed amount paid each month", "A teacher paid at the end of the month"], ["Rent", "Money paid to the owner of property for its use", "A tenant pays the owner of a rental room"], ["Interest", "Money earned for saving or lending money", "Savings in a SACCO or bank earn interest"], ["Profit", "What remains from sales after all costs are paid", "A mandazi seller who sells for KSh 400 and spent KSh 220"]] },
    { t: "fig", x: "pt2-money", cap: "Comparing income with expenditure shows a surplus, a balance or a deficit." },
    { t: "p", x: "If income is **more** than expenditure, you have a **surplus** and can save. If expenditure is **more** than income, you have a **deficit** and must borrow or cut spending. That is why we compare the two." },
    { t: "h", x: "Qualities of an entrepreneur" },
    { t: "p", x: "An **entrepreneur** is a person who spots a business opportunity, gathers resources and starts and runs a business, accepting the risk of loss. **Enterprise** means being ready to start and run business activities." },
    { t: "table", head: ["Quality", "How it helps the business grow"], rows: [["Hard work", "The owner serves customers well and the business keeps running"], ["Creativity", "New ideas or products attract customers away from rivals"], ["Risk taking", "The owner invests money to expand, after thinking carefully about the risk"], ["Honesty", "Customers trust the business and come back"], ["Perseverance", "The owner does not quit when sales are slow"], ["Good communication", "Customers are served politely, so they tell others"], ["Planning and saving", "Money is available for stock, repairs and growth"]] },
    { t: "h", x: "Spotting a business opportunity" },
    { t: "p", x: "A **business opportunity** is a chance to meet a need that people have and earn money from it. To spot one:" },
    { t: "ol", x: ["Look around your community and ask what people lack or complain about, for example long walks to buy bread.", "Talk to customers and neighbours about what they would buy.", "Check which skills and resources you already have.", "Check who else sells the same thing, and how you can do it better.", "Start small and test before spending a lot."] },
    { t: "h", x: "Classifying businesses by size" },
    { t: "p", x: "Businesses are grouped as **micro, small, medium and large**. We use these factors to decide the size:" },
    { t: "ul", x: ["**Number of employees**: how many people work in the business.", "**Capital**: the money and assets the owner has put into the business.", "**Volume of sales**: how much the business sells in a period.", "**Premises**: the size of the place used, from a roadside table to a large factory."] },
    { t: "fig", x: "pt2-bizsize", cap: "As a business grows, its workers, capital, sales and premises all increase." },
    { t: "tip", x: "Do not memorise numbers for business size. KJSEA questions ask you to name the factors and to say which size a described business is. A hawker who works alone is a micro business." },
    { t: "h", x: "Parts of a business plan" },
    { t: "p", x: "A **business plan** is a written document that sets out the business idea and how it will be run and paid for. It guides the owner and convinces a lender, such as a SACCO, that the idea is sound." },
    { t: "fig", x: "pt2-bizplan", cap: "The six parts of a business plan." },
    { t: "table", head: ["Part", "What it contains"], rows: [["Executive summary", "A short overview of the whole plan: the idea, the market, the money needed. Written last but placed first."], ["Business description", "Name, location, owner, type of business, and the aims of the business."], ["Products and services", "What is sold, its features, and the need it meets."], ["Marketing plan", "The customers, price, how the product will be promoted, and the rival sellers."], ["Organisation and management", "Who owns the business, who does each job, and how many workers are needed."], ["Financial plan", "Start-up costs, expected income and expenses, and expected profit."]] },
    { t: "h", x: "Good money management" },
    { t: "ul", x: ["**Budgeting**: a plan that shows expected income and how it will be spent. Plan before you spend.", "**Saving**: setting aside part of your income. Pay yourself first, before spending on wants.", "**Avoiding unnecessary debt**: borrow only for a good reason, such as buying stock that earns profit, and only what you can repay.", "**Keeping records**: write down money in and money out, so you know where your money goes."] },
    { t: "p", x: "**Kenyan examples:** A **SACCO** (Savings and Credit Cooperative Society) is owned by its members, who save together and can borrow from the pool. A **chama** is a small group whose members contribute money regularly and take turns to receive it, or use it for a shared investment. **Mobile money** services such as M-Pesa let you save, pay and send money safely, and the statement helps with records." },
    { t: "h", x: "A worked budget" },
    { t: "p", x: "Wanjiru earns a salary of KSh 30 000 a month. Her budget is:" },
    { t: "table", head: ["Item", "Amount (KSh)"], rows: [["Rent", "8 000"], ["Food", "9 000"], ["Transport", "3 500"], ["Electricity and water", "1 500"], ["Airtime and data", "1 000"], ["Savings (SACCO and chama)", "5 000"], ["Emergencies and other", "2 000"], ["Total planned spending", "30 000"]] },
    { t: "p", x: "Total spending is 8 000 + 9 000 + 3 500 + 1 500 + 1 000 + 5 000 + 2 000 = KSh 30 000. This equals her income, so the budget is **balanced**, and she still saves KSh 5 000 each month, which is one sixth of her income." },
    { t: "tip", x: "Common mistake: listing savings as money left over. A good budget puts savings in as a planned item so it is not spent on wants." }
  ],
  cards: [
    ["Need", "Something you must have to live and stay healthy, such as food, water and shelter."],
    ["Want", "Something you would like to have but can live without."],
    ["Income", "Money a person or business receives."],
    ["Expenditure", "Money a person or business spends."],
    ["Wages", "Pay for work done, often calculated by the day, hour or piece."],
    ["Interest", "Money earned from saving or lending money."],
    ["Entrepreneur", "A person who spots an opportunity and starts and runs a business, accepting the risk."],
    ["Business plan", "A written document showing the business idea and how it will be run and financed."],
    ["Executive summary", "A short overview of the whole business plan, placed at the start."],
    ["Budget", "A plan that shows expected income and how it will be spent."],
    ["SACCO", "A Savings and Credit Cooperative Society owned by members who save together and borrow from the pool."],
    ["Chama", "A small group whose members contribute money regularly and take turns to receive it or invest it together."]
  ],
  mcq: [
    { q: "Juma has KSh 1 000 and four things he would like to buy. Which of them is a need?", o: ["A new video game", "Maize flour for supper", "A branded cap", "A music speaker"], a: 1, e: "Food is a need because we cannot live without it. The other items are wants." },
    { q: "Mama Zawadi owns a plot with a rental room. The money her tenant pays her every month is called", o: ["wages", "interest", "profit", "rent"], a: 3, e: "Money paid to an owner for the use of property is rent." },
    { q: "Which of the following is NOT a quality of a good entrepreneur?", o: ["Hard work", "Willingness to take a planned risk", "Giving up when the first problem appears", "Creativity"], a: 2, e: "Good entrepreneurs show perseverance. They keep trying when problems appear." },
    { q: "Which of the following is NOT a factor used to classify a business by size?", o: ["Colour of the shop signboard", "Number of employees", "Volume of sales", "Capital invested"], a: 0, e: "Size is decided by employees, capital, sales and premises. A signboard colour says nothing about size." },
    { q: "Kamau is writing a business plan. He describes how he will find customers, set prices and advertise. Which part of the plan is this?", o: ["Executive summary", "Marketing plan", "Financial plan", "Organisation and management"], a: 1, e: "The marketing plan covers customers, price, promotion and rivals." },
    { q: "Njeri earns KSh 24 000 a month and spends KSh 20 500. How much does she have left?", o: ["KSh 3 000", "KSh 4 500", "KSh 2 500", "KSh 3 500"], a: 3, e: "24 000 less 20 500 is KSh 3 500. Her income is more than her spending, so she has a surplus." },
    { q: "Women in Nanyuki each give KSh 500 every month and take turns to receive the full amount. This group is called a", o: ["chama", "stock exchange", "trade fair", "wholesale shop"], a: 0, e: "A chama is a group that contributes money regularly and takes turns to receive it." },
    { q: "Four learners were asked how to manage money well. Identify the learner who gave the correct response.", o: ["Achieng: Borrow whenever you want something new.", "Otieno: Save only what is left after spending.", "Wafula: Pay for needs first and put aside a fixed saving at once.", "Neema: Do not keep records, they waste time."], a: 2, e: "Needs come first and saving should be planned. Borrowing for wants and skipping records are poor habits." }
  ],
  short: [
    { q: "State three sources of income.", marks: 3, pts: ["Wages", "Salary", "Rent", "Interest", "Profit"] },
    { q: "Outline four ways of managing money well.", marks: 4, pts: ["Make a budget before spending", "Save part of the income regularly, for example in a SACCO, chama or mobile savings account", "Avoid unnecessary debt and borrow only what you can repay", "Keep records of money received and spent", "Meet needs before wants"] },
    { q: "Explain two qualities of an entrepreneur and how each helps the business grow.", marks: 4, pts: [{ t: "Hard work (1): the owner serves customers and runs the business well, so sales increase (1)", m: 2 }, { t: "Honesty (1): customers trust the business and keep buying (1)", m: 2 }, { t: "Creativity (1): new ideas attract more customers (1)", m: 2 }, { t: "Perseverance (1): the owner keeps going when sales are slow (1)", m: 2 }] }
  ],
  cases: [
    {
      title: "A business plan for a mandazi enterprise", tag: "Project",
      scenario: "Mwajuma, a Grade 9 learner at Masomo Junior School, wants to sell mandazi to learners at break time as a school enterprise. She will make 40 mandazi a day and sell each at KSh 10. The ingredients and firewood cost KSh 220 each day. She has started writing her business plan.",
      parts: [
        { q: "(a) Name two parts of a business plan she must include.", marks: 2, pts: ["Executive summary", "Business description", "Products and services", "Marketing plan", "Organisation and management", "Financial plan"] },
        { q: "(b) Calculate her profit for one day. Show your working.", marks: 3, pts: ["Income: 40 × 10 = KSh 400", "Expenses: KSh 220", "Profit: 400 less 220 = KSh 180"] },
        { q: "(c) State two ways she can let learners know about her mandazi.", marks: 2, pts: ["Put up a poster in the dining area", "Announce at assembly", "Give free samples to a few learners", "Tell friends who then tell others"] },
        { q: "(d) Describe how she can manage the KSh 180 profit well.", marks: 3, pts: ["Keep a simple record of money earned and spent each day", "Save part of the profit, for example in a chama or a mobile savings account", "Set aside money to buy ingredients for the next day, so the business can continue", "Do not spend all of it on wants"] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 5 */
{
  id: "pt-books", subject: "pt", n: 5, grades: [9],
  title: "Bookkeeping and the statement of financial position",
  blurb: "Records, source documents, assets and liabilities, and how to prepare a statement that balances",
  notes: [
    { t: "h", x: "Why businesses keep records" },
    { t: "p", x: "**Bookkeeping** means recording the money transactions of a business in an orderly way. Businesses keep records for these reasons:" },
    { t: "ul", x: ["To know how much money came in and went out.", "To find out whether the business is making a **profit** or a loss.", "To know what the business owns and owes.", "To avoid theft and mistakes, because every payment can be checked.", "To show a bank or SACCO when applying for a loan, and to pay the correct tax."] },
    { t: "h", x: "Source documents" },
    { t: "p", x: "A **source document** is the paper that gives the first proof that a transaction took place. Records are written from these documents." },
    { t: "table", head: ["Document", "Purpose"], rows: [["Receipt", "Given to a person who has paid money. It is proof of payment."], ["Invoice", "Sent by a seller to a buyer who will pay later. It lists the goods, prices and the amount owed."], ["Cash sale slip", "Records a sale paid for in cash on the spot. The seller keeps a copy."]] },
    { t: "p", x: "**Example:** Zainabu buys sugar from Daima Traders and takes it away without paying. Daima Traders issues an **invoice**. When she pays on Friday, they give her a **receipt**." },
    { t: "h", x: "The cash book" },
    { t: "p", x: "The **cash book** records all money received and all money paid out, with the balance after each entry. Money in is added and money out is subtracted." },
    { t: "table", head: ["Date", "Details", "Money in", "Money out", "Balance"], rows: [["1 Mar", "Balance at start", "5 000", "", "5 000"], ["2 Mar", "Cash sales", "3 000", "", "8 000"], ["3 Mar", "Bought stock", "", "2 500", "5 500"], ["4 Mar", "Paid transport", "", "500", "5 000"], ["5 Mar", "Cash sales", "4 000", "", "9 000"]] },
    { t: "p", x: "Check: 5 000 + 3 000 + 4 000 = 12 000 in. 2 500 + 500 = 3 000 out. 12 000 less 3 000 is **KSh 9 000**, which matches the last balance." },
    { t: "h", x: "Assets, liabilities and capital" },
    { t: "ul", x: ["**Assets**: things the business owns that have value, such as shop equipment, stock, cash and money owed by customers (debtors).", "**Liabilities**: money the business owes to others, such as a bank loan, unpaid bills and money owed to suppliers (creditors).", "**Capital**: the owner's own investment in the business. It is what is left for the owner after all liabilities are taken from the assets."] },
    { t: "h", x: "Classifying assets and liabilities" },
    { t: "table", head: ["Group", "Meaning", "Examples"], rows: [["Non-current assets", "Owned for more than a year and used to run the business", "Shop equipment, delivery bicycle, building"], ["Current assets", "Cash or things turned into cash within a year", "Stock, debtors, cash at bank, cash in hand"], ["Current liabilities", "Debts to be paid within a year", "Creditors, bank overdraft, unpaid bills"], ["Non-current liabilities", "Debts to be paid after more than a year", "A bank loan repayable after more than a year"]] },
    { t: "tip", x: "A **bank overdraft** is money the bank has allowed you to take out beyond your balance. You owe it, so it is a **current liability**, not an asset. A loan repayable after more than a year is a **non-current liability**." },
    { t: "h", x: "The accounting equation" },
    { t: "p", x: "Everything a business owns was paid for by the owner (capital) or by others (liabilities). So the two sides must always be equal:" },
    { t: "fig", x: "pt2-equation", cap: "Assets = Capital + Liabilities. The scale must balance." },
    { t: "p", x: "**Example:** A business has assets of KSh 90 000 and liabilities of KSh 30 000. Capital = 90 000 less 30 000 = **KSh 60 000**." },
    { t: "h", x: "Preparing a statement of financial position" },
    { t: "p", x: "A **statement of financial position** lists a business's assets, capital and liabilities on a certain date. It shows what the business owns and owes." },
    { t: "fig", x: "pt2-sofp", cap: "Layout of a statement of financial position." },
    { t: "ol", x: ["Write the heading: business name, the title and the date.", "List non-current assets and add them up.", "List current assets and add them up.", "Add both to get total assets.", "Write capital, then list non-current liabilities and current liabilities.", "Add them to get total capital and liabilities.", "Check that the two totals are equal."] },
    { t: "h", x: "A fully worked example" },
    { t: "p", x: "Baraka's Shop, as at 31 December 2026. Assets: shop equipment KSh 45 000, delivery bicycle KSh 15 000, stock KSh 30 000, debtors KSh 8 000, cash at bank KSh 20 000, cash in hand KSh 5 000. Liabilities: bank loan repayable in three years KSh 40 000, creditors KSh 12 000, unpaid wages KSh 3 000. Capital is found as the balancing figure." },
    { t: "table", head: ["Item", "KSh", "KSh"], rows: [["Non-current assets", "", ""], ["Shop equipment", "45 000", ""], ["Delivery bicycle", "15 000", "60 000"], ["Current assets", "", ""], ["Stock", "30 000", ""], ["Debtors", "8 000", ""], ["Cash at bank", "20 000", ""], ["Cash in hand", "5 000", "63 000"], ["TOTAL ASSETS", "", "123 000"], ["Capital", "", "68 000"], ["Non-current liabilities: bank loan", "", "40 000"], ["Current liabilities", "", ""], ["Creditors", "12 000", ""], ["Unpaid wages", "3 000", "15 000"], ["TOTAL CAPITAL AND LIABILITIES", "", "123 000"]] },
    { t: "p", x: "Check: assets 60 000 + 63 000 = 123 000. Liabilities 40 000 + 15 000 = 55 000. Capital = 123 000 less 55 000 = 68 000. Then 68 000 + 55 000 = 123 000, so the statement **balances**." },
    { t: "h", x: "Profit and loss in simple form" },
    { t: "p", x: "**Profit** = income less expenses. If expenses are more than income, there is a **loss**." },
    { t: "p", x: "**Example:** Wanjiru's tailoring earned KSh 96 000 from sewing in a year. Expenses: rent 24 000, materials 30 000, electricity 6 000, transport 9 000. Total expenses = 69 000. Profit = 96 000 less 69 000 = **KSh 27 000**. Profit adds to capital, and a loss reduces it." },
    { t: "tip", x: "Common mistakes: treating a bank overdraft as an asset; putting a loan due after more than a year among current liabilities; forgetting to add up each group; and presenting totals that do not balance. Always check that total assets equal total capital and liabilities." }
  ],
  cards: [
    ["Bookkeeping", "Recording the money transactions of a business in an orderly way."],
    ["Source document", "A paper that gives first proof of a transaction, such as a receipt or an invoice."],
    ["Receipt", "A document given to a person who has paid. It is proof of payment."],
    ["Invoice", "A document sent by a seller listing goods supplied and the amount the buyer owes."],
    ["Cash book", "A record of all money received and paid out, with the balance."],
    ["Asset", "Something a business owns that has value."],
    ["Liability", "Money a business owes to others."],
    ["Capital", "The owner's investment in the business: assets less liabilities."],
    ["Current liability", "A debt to be paid within a year, such as creditors or a bank overdraft."],
    ["Non-current liability", "A debt to be paid after more than a year, such as a long-term bank loan."],
    ["Accounting equation", "Assets = Capital + Liabilities."],
    ["Statement of financial position", "A statement listing the assets, capital and liabilities of a business on a given date."]
  ],
  mcq: [
    { q: "Baraka runs a shop. Which of these is the best reason for him to keep records?", o: ["To make customers wait longer", "To know whether the shop is making a profit", "To avoid giving receipts", "To hide money from the bank"], a: 2, e: "Records show whether the shop makes a profit. Wait: option C is not correct, so the answer is B." },
    { q: "Zainabu pays for sugar at Daima Traders. Which document does she receive as proof of payment?", o: ["A receipt", "An invoice", "A budget", "A business plan"], a: 0, e: "A receipt is given as proof that money has been paid." },
    { q: "Daima Traders sends goods to Masomo Junior School to be paid for next month. Which document lists the goods and the amount owed?", o: ["Receipt", "Cash sale slip", "Bank deposit slip", "Invoice"], a: 3, e: "An invoice is sent to a buyer who will pay later." },
    { q: "Which of the following is a non-current asset for a shop?", o: ["Stock of sugar", "A refrigerator", "Cash in hand", "Money owed by customers"], a: 1, e: "A refrigerator is used for more than a year to run the business. The others turn into cash within a year." },
    { q: "A shop has a bank overdraft of KSh 6 000. In the statement of financial position it is shown as a", o: ["current asset", "non-current asset", "current liability", "non-current liability"], a: 2, e: "An overdraft is a debt repayable on demand, so it is a current liability." },
    { q: "A business has assets of KSh 140 000 and liabilities of KSh 45 000. What is its capital?", o: ["KSh 185 000", "KSh 95 000", "KSh 105 000", "KSh 140 000"], a: 1, e: "Capital = assets less liabilities = 140 000 less 45 000 = KSh 95 000." },
    { q: "Four learners prepared a statement of financial position. Identify the learner who gave the correct response.", o: ["Neema: A loan repayable in three years is a current liability.", "Otieno: Total assets must equal total capital and liabilities.", "Achieng: Debtors are a non-current liability.", "Wafula: A bank overdraft is a non-current asset."], a: 1, e: "The statement must balance. A three-year loan is non-current, debtors are an asset and an overdraft is a liability." },
    { q: "Wanjiku keeps a cash book. It shows an opening balance of KSh 2 000, receipts of KSh 3 500 and payments of KSh 1 800. What is the closing balance?", o: ["KSh 3 700", "KSh 7 300", "KSh 5 500", "KSh 3 300"], a: 0, e: "2 000 + 3 500 = 5 500, less 1 800 = KSh 3 700." }
  ],
  short: [
    { q: "Identify three source documents used in a business.", marks: 3, pts: ["Receipt", "Invoice", "Cash sale slip", "Delivery note", "Cheque or bank deposit slip"] },
    { q: "On 31 December, Wanjiku's business had assets of KSh 140 000 and liabilities of KSh 45 000. Calculate the capital using the accounting equation. Show your working.", marks: 3, pts: ["Equation: assets = capital + liabilities, so capital = assets less liabilities", "140 000 less 45 000", "KSh 95 000"] },
    { q: "Explain two reasons why a business keeps records.", marks: 4, pts: [{ t: "To find out the profit or loss (1): so the owner knows if the business is doing well (1)", m: 2 }, { t: "To prevent theft and mistakes (1): payments can be checked against records (1)", m: 2 }, { t: "To support a loan application (1): the bank or SACCO can see the business is sound (1)", m: 2 }] }
  ],
  cases: [
    {
      title: "Tabitha's Mini-Mart", tag: "Case study",
      scenario: "Tabitha runs Mini-Mart near Nanyuki. On 31 December 2026 she listed: shop shelves KSh 24 000, refrigerator KSh 36 000, stock KSh 41 000, cash in hand KSh 6 000, cash at bank KSh 18 000, bank loan repayable in three years KSh 30 000, creditors KSh 14 000 and an unpaid electricity bill KSh 3 000.",
      parts: [
        { q: "(a) State two non-current assets of Mini-Mart.", marks: 2, pts: ["Shop shelves", "Refrigerator"] },
        { q: "(b) Calculate the total current assets.", marks: 2, pts: ["Adds stock, cash in hand and cash at bank: 41 000 + 6 000 + 18 000", "KSh 65 000"] },
        { q: "(c) Calculate Tabitha's capital. Show your working.", marks: 3, pts: ["Total assets: 60 000 + 65 000 = KSh 125 000", "Total liabilities: 30 000 + 14 000 + 3 000 = KSh 47 000", "Capital = 125 000 less 47 000 = KSh 78 000"] },
        { q: "(d) Explain why the bank loan is a non-current liability.", marks: 2, pts: [{ t: "It is repayable after more than one year, (1 mark)", m: 1 }, { t: "so it is not shown with the debts due within a year (1 mark)", m: 1 }] }
      ]
    }
  ]
},

/* ------------------------------------------------------------------ 6 */
{
  id: "pt-computer", subject: "pt", n: 6, grades: [7, 8, 9],
  title: "Computer studies: devices, word processing, safety and visual programming",
  blurb: "Hardware and software, typing, caring for computers, viruses, choosing a laptop and visual programs",
  notes: [
    { t: "h", x: "Computer hardware" },
    { t: "p", x: "**Hardware** is the parts of a computer that you can touch. They fall into four groups." },
    { t: "fig", x: "pt2-hardware", cap: "Input, processing, output and storage hardware." },
    { t: "table", head: ["Group", "Job", "Examples"], rows: [["Input", "Sends data into the computer", "Keyboard, mouse, microphone, barcode or hand-held scanner, touch screen"], ["Processing", "Works on the data", "Processor (CPU), memory (RAM)"], ["Output", "Shows results", "Monitor, printer, speaker, projector"], ["Storage", "Keeps data for later", "Hard disk, flash disk, memory card"]] },
    { t: "p", x: "**Business example:** A shop cashier uses a **barcode scanner** to read the price code on goods (input), the computer works out the total (processing), and a **receipt printer** prints the receipt (output)." },
    { t: "h", x: "Computer software" },
    { t: "p", x: "**Software** is the set of programs that tell the computer what to do. You cannot touch it." },
    { t: "table", head: ["Type", "Job", "Examples"], rows: [["System software", "Runs and controls the computer", "Operating system such as Windows or Android"], ["Application software", "Helps the user do a task", "Word processor, spreadsheet, games, a visual programming tool"]] },
    { t: "h", x: "Word processing" },
    { t: "p", x: "A **word processor** is application software for typing, editing, formatting and printing documents. Use the keyboard with correct finger positions, keep your back straight and look at the screen, not at the keys." },
    { t: "table", head: ["Case option", "What it does", "Example"], rows: [["UPPERCASE", "Makes every letter a capital", "KENYA IS BEAUTIFUL"], ["lowercase", "Makes every letter small", "kenya is beautiful"], ["Sentence case", "Capital only at the start of each sentence", "Kenya is beautiful."], ["Capitalise Each Word", "Capital at the start of every word", "Kenya Is Beautiful"]] },
    { t: "ul", x: ["**Formatting**: changing how text looks, such as bold, italic, underline, font type, font size and alignment.", "**Saving**: storing the file with a name in a folder so you can open it later. Save often.", "**Printing**: preview the page first, choose the printer and number of copies, then print.", "**Spell check**: finds words that may be wrongly spelt. It does not find every mistake, so read your work again."] },
    { t: "h", x: "Caring for computers and e-waste" },
    { t: "ul", x: ["Keep the computer room dry, dust-free and well ventilated, and keep food and drinks away.", "Shut down properly, and use a surge guard or stabiliser where the power is unstable.", "Before cleaning, switch off and unplug. Use a soft, slightly damp cloth and never spray liquid directly on the screen.", "Cleaning substances can be **hazardous**. Read the label, wear gloves, never mix them and keep them away from children."] },
    { t: "p", x: "**E-waste** is old or broken electronic equipment such as monitors, keyboards, batteries and circuit boards. It contains harmful substances such as lead that can poison soil and water. Never burn it or throw it in a pit. Keep it for a licensed collector or recycler, and reuse working parts." },
    { t: "h", x: "Viruses and protecting data" },
    { t: "p", x: "A **computer virus** is a harmful program that copies itself and damages files or slows the computer. It spreads through infected flash disks, downloads and email attachments. **Antivirus software** finds and removes viruses and must be kept updated." },
    { t: "table", head: ["Way to protect data", "Why it works"], rows: [["Strong password", "Only the owner can open the computer or account. Use a mix of letters, numbers and symbols and keep it secret."], ["Backup", "A copy on another device means files are not lost if the computer fails or is stolen."], ["Updates", "Fix weaknesses that viruses use to get in."], ["Scan flash disks", "Catches viruses before they spread."]] },
    { t: "h", x: "Choosing a laptop for a business" },
    { t: "table", head: ["Feature", "What to check"], rows: [["Processor", "A fast enough processor so programs do not hang"], ["Memory (RAM)", "Enough RAM to run several programs at once"], ["Storage", "Enough space for files, and a way to back up"], ["Battery", "Long life, important where power cuts are common"], ["Screen", "A size and brightness comfortable for long work"], ["Durability", "A strong body for being carried to the market or shop"], ["Price", "Affordable and within the business budget"]] },
    { t: "tip", x: "When asked to choose a computer, link each feature to the user's need. For a trader who travels, battery life and durability matter more than a large screen." },
    { t: "h", x: "Visual programming" },
    { t: "p", x: "**Visual programming** means building a program by joining **blocks** instead of typing code. Key ideas:" },
    { t: "ul", x: ["**Sprites or objects**: the characters or items that follow your instructions.", "**Events**: something that starts the program, such as clicking the green flag.", "**Loops**: blocks that repeat instructions, such as repeat 10 times.", "**Variables**: named boxes that store a value, such as length or price.", "**Input and output statements**: input takes data in (ask and wait); output shows results (say or print).", "**Looks, sound and animation effects**: blocks that change a sprite's costume, size or movement, or play a sound."] },
    { t: "h", x: "A worked program" },
    { t: "p", x: "This program finds the area of a rectangle. Each block does one job. The colour tells you the type of block." },
    { t: "fig", x: "pt2-blocks", cap: "A stack of blocks that asks for length and width and says the area." },
    { t: "p", x: "**Trace it:** Enter length 8 and width 5. The block set area to length x width gives 8 × 5 = 40, so the sprite says Area = 40." },
    { t: "fig", x: "pt2-flow", cap: "The same program as a flowchart." },
    { t: "p", x: "**Total cost version:** ask for the price of one item and the number bought, then set total to price x number. With price KSh 60 and 5 items, total = 60 × 5 = KSh 300." },
    { t: "tip", x: "Common mistake: using the wrong symbol for multiply. In most block tools, multiply is the star or the x block, not the plus sign. Always trace your program with simple numbers to test it." }
  ],
  cards: [
    ["Hardware", "The parts of a computer that you can touch."],
    ["Software", "Programs that tell the computer what to do."],
    ["System software", "Software that runs and controls the computer, such as an operating system."],
    ["Application software", "Software that helps users do a task, such as a word processor."],
    ["Barcode scanner", "An input device that reads the lines of a barcode to identify a product and price."],
    ["Sentence case", "A text option that puts a capital letter only at the start of each sentence."],
    ["E-waste", "Old or broken electronic equipment that must be disposed of safely."],
    ["Computer virus", "A harmful program that copies itself and damages files or slows the computer."],
    ["Backup", "A copy of files kept on another device in case the original is lost."],
    ["Variable", "A named box in a program that stores a value."],
    ["Loop", "A block that repeats instructions."],
    ["Event", "Something that starts a program or a set of blocks, such as clicking the green flag."]
  ],
  mcq: [
    { q: "A cashier at Daima Traders uses a hand-held scanner to read price codes on goods. The scanner is an example of an", o: ["input device", "output device", "storage device", "processing device"], a: 0, e: "A scanner sends data into the computer, so it is an input device." },
    { q: "Which of the following is an example of application software?", o: ["Operating system", "Language translator", "Word processor", "Device driver"], a: 2, e: "A word processor helps a user do a task. The others control the computer." },
    { q: "Grade 8 learner typed kenya is a beautiful country and wants it to read Kenya Is A Beautiful Country. Which text case option should he use?", o: ["UPPERCASE", "Sentence case", "lowercase", "Capitalise Each Word"], a: 3, e: "Capitalise Each Word puts a capital letter at the start of every word." },
    { q: "Masomo Junior School has old broken monitors and batteries from the computer room. What is the safest way to dispose of them?", o: ["Burn them behind the school", "Give them to a licensed e-waste collector", "Throw them into a pit latrine", "Bury them in the school garden"], a: 1, e: "E-waste contains harmful substances. Licensed collectors recycle it safely." },
    { q: "After a learner plugged in a friend's flash disk, the school computer became slow and some files vanished. The most likely cause is", o: ["too much memory", "a new keyboard", "a computer virus", "a wrong date"], a: 2, e: "Flash disks often carry viruses that damage files and slow the computer." },
    { q: "In a visual program, which kind of block repeats a set of instructions many times?", o: ["Event block", "Loop block", "Variable block", "Sound block"], a: 1, e: "A loop repeats instructions. Events start programs, and variables store values." },
    { q: "Mama Zawadi travels to markets with her laptop where power cuts are common. Which feature matters most for her?", o: ["Long battery life", "Large built-in speakers", "Coloured keyboard lights", "Many pre-installed games"], a: 0, e: "A long battery lets her keep working when power is off." },
    { fig: "pt2-blocks", q: "A learner runs the program in the diagram and enters length 6 and width 4. What will the sprite say?", o: ["Area = 10", "Area = 20", "Area = 64", "Area = 24"], a: 3, e: "The program multiplies length by width: 6 × 4 = 24." }
  ],
  short: [
    { q: "State three input devices.", marks: 3, pts: ["Keyboard", "Mouse", "Microphone", "Barcode or hand-held scanner", "Touch screen", "Digital camera"] },
    { q: "Outline four ways of protecting data on a computer.", marks: 4, pts: ["Use strong passwords", "Make regular backups", "Install antivirus software and keep it updated", "Update the operating system and programs", "Scan flash disks before opening them", "Keep the computer room locked"] },
    { q: "Explain two precautions to take when cleaning computer equipment.", marks: 4, pts: [{ t: "Switch off and unplug first (1) to avoid electric shock (1)", m: 2 }, { t: "Use a soft, slightly damp cloth, not spraying liquid onto the screen (1) because liquid can enter the equipment and damage it (1)", m: 2 }, { t: "Wear gloves and read the label of cleaning substances (1) because some are hazardous to the skin or lungs (1)", m: 2 }] }
  ],
  cases: [
    {
      title: "A visual program for the tuck shop", tag: "Project",
      scenario: "Grade 7 learners at Masomo Junior School are building a visual program for the school tuck shop. The program asks for the price of one exercise book and the number of books a customer buys. It then calculates and shows the total cost.",
      parts: [
        { q: "(a) Identify two variables the program needs.", marks: 2, pts: ["Price (of one book)", "Number (of books)", "Total (cost)"] },
        { q: "(b) Write the calculation the program must carry out and work out the total for a price of KSh 60 and 5 books.", marks: 3, pts: ["Total = price x number", "60 x 5", "KSh 300"] },
        { q: "(c) Name the type of block used to take in the price and the type used to show the total.", marks: 2, pts: ["Input block, for example ask and wait", "Output block, for example say or print"] },
        { q: "(d) Describe how the program can serve the next customer without being restarted.", marks: 2, pts: ["Place the blocks inside a loop such as forever or repeat until", "At the end of each pass, the program returns to the first question and asks again"] }
      ]
    }
  ]
}

);
