// src/lib/contentExtra.js
// Additional service landing pages (same shape as SERVICE_PAGES in content.js).
// They are merged into SERVICE_PAGES, so routes, SEO config, sitemap, prerender and footer pick them up automatically.
// IMPORTANT: have CA Lalit Gupta verify thresholds, due dates and form names before publishing (the Income-tax Act, 2025
// renumbers sections and forms from 1 April 2026). Keep the informational, non-promotional tone (ICAI rules).

export const EXTRA_SERVICE_PAGES = [
  {
    "slug": "gst-annual-return-gstr-9-siliguri",
    "matchTitles": [
      "GST Annual Return (GSTR-9, GSTR-9C)"
    ],
    "icon": "Receipt",
    "navTitle": "GST Annual Return (GSTR-9, GSTR-9C)",
    "h1": "GST Annual Return (GSTR-9 / GSTR-9C) in Siliguri",
    "metaTitle": "GST Annual Return GSTR-9 & 9C in Siliguri | LG & Associates",
    "metaDescription": "GSTR-9 annual return and GSTR-9C reconciliation filing in Siliguri. Year-end GST reconciliation and filing.",
    "keywords": "gstr 9 filing siliguri, gst annual return siliguri, gstr 9c siliguri, ca in siliguri",
    "lead": "The annual return is the department's cross-check of everything you reported during the year. We reconcile your books, financial statements and monthly returns first, correct what can still be corrected, and then file GSTR-9 and, where required, GSTR-9C.",
    "sections": [
      {
        "h2": "Who needs gst annual return (gstr-9, gstr-9c)",
        "list": [
          "Regular taxpayers who must file GSTR-9",
          "Businesses above the reconciliation-statement limit",
          "Taxpayers who missed adjustments in monthly returns",
          "Businesses that received a GST scrutiny intimation"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Year-end reconciliation of books versus GST returns",
          "Review of ITC claimed versus ITC available",
          "GSTR-9 preparation and filing",
          "GSTR-9C reconciliation statement where applicable",
          "Identification of differences and payment of any short tax with interest"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "All monthly GST returns for the year",
          "Audited or draft financial statements",
          "Sales, purchase and expense ledgers",
          "ITC register and GSTR-2B data",
          "Details of credit notes and amendments"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is GSTR-9 mandatory for everyone?",
        "a": "Not for every taxpayer. Small taxpayers below a prescribed turnover limit and certain categories are exempt or have optional filing. We check the rules applicable to your year."
      },
      {
        "q": "When is GSTR-9C required?",
        "a": "It is required for taxpayers above the prescribed turnover limit and is a self-certified reconciliation between audited accounts and the annual return."
      },
      {
        "q": "Can I correct mistakes of the previous year in the annual return?",
        "a": "Some corrections can be reflected in the annual return, but the available window is limited. This is why we recommend a reconciliation well before the due date."
      },
      {
        "q": "What if I find tax short-paid during reconciliation?",
        "a": "Short-paid tax can be deposited with interest through the GST portal, which is usually less costly than waiting for a notice."
      }
    ],
    "related": [
      "gst-registration-and-returns-siliguri",
      "gst-notice-reply-siliguri",
      "accounting-and-bookkeeping-siliguri"
    ]
  },
  {
    "slug": "gst-notice-reply-siliguri",
    "matchTitles": [
      "GST Notice Reply & Litigation Support"
    ],
    "icon": "ShieldCheck",
    "navTitle": "GST Notice Reply & Litigation Support",
    "h1": "GST Notice Reply & Assistance in Siliguri",
    "metaTitle": "GST Notice Reply in Siliguri | LG & Associates",
    "metaDescription": "GST notice reply and assistance in Siliguri: ASMT-10, show cause notices, ITC mismatch, demand orders and appeals. Replies prepared by a chartered accountant.",
    "keywords": "gst notice reply siliguri, gst scrutiny notice siliguri, gst show cause notice help, ca in siliguri",
    "lead": "A GST notice has a response deadline and a reply that is badly drafted can convert a small query into a large demand. We read the notice, identify the exact allegation, assemble the supporting records and file a reasoned reply on time.",
    "sections": [
      {
        "h2": "Who needs gst notice reply & litigation support",
        "list": [
          "Taxpayers who received a scrutiny or discrepancy notice",
          "Businesses with ITC mismatch or GSTR-1 vs 3B differences",
          "Registrations proposed for cancellation",
          "Taxpayers with a demand order who want to file an appeal"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Notice analysis and deadline tracking",
          "Reply drafting with annexures and reconciliations",
          "Personal hearing preparation",
          "Rectification, appeal and stay of recovery assistance",
          "Registration cancellation response and revocation application",
          "Advisory on avoiding repeat notices"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Copy of the notice and its portal reference",
          "Returns and ledgers for the period in question",
          "Invoices, e-way bills and bank proof relating to the issue",
          "Earlier correspondence with the department",
          "GST portal access for viewing the notice"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What should I do first when I receive a GST notice?",
        "a": "Do not ignore it. Note the response date, download the notice from the portal and share it with us immediately along with the related returns."
      },
      {
        "q": "Can a GST notice be avoided?",
        "a": "Many notices arise from mismatches between GSTR-1, GSTR-3B and GSTR-2B. Monthly reconciliation reduces the risk significantly."
      },
      {
        "q": "What if the response date has passed?",
        "a": "You can still approach the department, request condonation or file within any extended time, and proceed to appeal if an order is passed. Delay narrows your options, so act quickly."
      },
      {
        "q": "Can you handle my appeal against a GST order?",
        "a": "Yes. We assist with drafting the appeal, collecting evidence and the pre-deposit requirements, within the statutory time limit."
      }
    ],
    "related": [
      "gst-registration-and-returns-siliguri",
      "gst-annual-return-gstr-9-siliguri",
      "accounting-and-bookkeeping-siliguri"
    ]
  },
  {
    "slug": "income-tax-notice-reply-siliguri",
    "matchTitles": [
      "Income Tax Notice Reply"
    ],
    "icon": "FileCheck",
    "navTitle": "Income Tax Notice Reply",
    "h1": "Income Tax Notice Reply & Assessment Support in Siliguri",
    "metaTitle": "Income Tax Notice Reply in Siliguri | LG & Associates",
    "metaDescription": "Income tax notice assistance in Siliguri: defective return, scrutiny, mismatch, demand and reassessment notices answered by a chartered accountant.",
    "keywords": "income tax notice reply siliguri, income tax scrutiny notice, defective return notice, ca in siliguri",
    "lead": "From a simple intimation to a scrutiny assessment, we help you understand what the department is asking, prepare the correct response on the e-filing portal and follow the matter through to closure.",
    "sections": [
      {
        "h2": "Who needs income tax notice reply",
        "list": [
          "Taxpayers with an intimation showing a demand",
          "Returns marked defective",
          "Scrutiny and information-request notices",
          "Cases of AIS or Form 26AS mismatch",
          "Taxpayers who need to file a rectification or appeal"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Notice review and response planning",
          "Online reply with computation, evidence and annexures",
          "Rectification of intimation errors",
          "Representation in assessment proceedings",
          "Appeal drafting before the first appellate authority",
          "Refund follow-up"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Notice copy and DIN",
          "Return and computation for the year in question",
          "AIS, Form 26AS and bank statements",
          "Books, invoices and proof for claims made",
          "Income tax portal login access"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is every income tax notice a sign of a problem?",
        "a": "No. Many notices are automated mismatches or requests for information. They still need a timely and accurate response."
      },
      {
        "q": "What is a defective return notice?",
        "a": "It means the return had a technical or filing defect, and you must correct it within the time allowed or risk the return being treated as invalid."
      },
      {
        "q": "Can an old assessment year be reopened?",
        "a": "Reassessment is possible within limits set by law and only after prescribed procedures. We check whether the notice itself is valid before replying on the merits."
      },
      {
        "q": "Which law applies to my notice if it relates to an earlier year?",
        "a": "Notices for income up to 31 March 2026 are generally dealt with under the Income-tax Act, 1961, even though the Income-tax Act, 2025 now governs later years."
      }
    ],
    "related": [
      "income-tax-return-filing-siliguri",
      "tax-planning-siliguri",
      "advance-tax-planning-siliguri"
    ]
  },
  {
    "slug": "advance-tax-planning-siliguri",
    "matchTitles": [
      "Advance Tax Planning"
    ],
    "icon": "Calculator",
    "navTitle": "Advance Tax Planning",
    "h1": "Advance Tax Consultancy in Siliguri",
    "metaTitle": "Advance Tax Calculation & Planning in Siliguri | LG & Associates",
    "metaDescription": "Advance tax estimation and instalment planning in Siliguri for businesses, professionals and investors. Avoid interest under the tax law.",
    "keywords": "advance tax siliguri, advance tax calculation, advance tax consultant, ca in siliguri",
    "lead": "Advance tax is paid during the year, not at filing time. We estimate your income from business, capital gains and other sources, compute instalments and track them so interest is avoided and cash flow remains predictable.",
    "sections": [
      {
        "h2": "Who needs advance tax planning",
        "list": [
          "Business owners and professionals",
          "Investors with capital gains",
          "Landlords and high-interest earners",
          "Companies and firms"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Income projection and tax estimate",
          "Instalment schedule and challan preparation",
          "Mid-year revision after capital gains or profit swings",
          "Interest computation and review",
          "Presumptive-taxation advance tax planning"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Year-to-date books or turnover",
          "Capital gains statements",
          "Interest, rent and other income details",
          "TDS and TCS already deducted",
          "Previous year's return"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Who has to pay advance tax?",
        "a": "Generally anyone whose estimated tax liability for the year, after TDS, crosses the prescribed minimum. Senior citizens without business income are treated differently."
      },
      {
        "q": "What are the advance tax due dates?",
        "a": "Instalments fall in June, September, December and March, with a single payment for presumptive-scheme taxpayers. We confirm the schedule under the law applicable to each year."
      },
      {
        "q": "What if I underpay advance tax?",
        "a": "Interest is charged for shortfall and deferment. Paying promptly after a large capital gain reduces it."
      },
      {
        "q": "Is advance tax payable on capital gains?",
        "a": "Yes. Tax on capital gains is also paid in advance, in the instalment following the gain."
      }
    ],
    "related": [
      "income-tax-return-filing-siliguri",
      "tax-planning-siliguri",
      "income-tax-notice-reply-siliguri"
    ]
  },
  {
    "slug": "tax-planning-siliguri",
    "matchTitles": [
      "Tax Planning"
    ],
    "icon": "PiggyBank",
    "navTitle": "Tax Planning",
    "h1": "Tax Planning & Advisory in Siliguri",
    "metaTitle": "Tax Planning in Siliguri | LG & Associates",
    "metaDescription": "Tax planning in Siliguri for individuals, professionals and businesses. Regime comparison, deductions, structure review and legal tax savings.",
    "keywords": "tax planning siliguri, tax consultant siliguri, old vs new tax regime, ca in siliguri",
    "lead": "Good tax planning is done before the financial year ends, not at return time. We compare tax regimes, review deductions and business structure, and recommend steps that reduce tax within the law and match your goals.",
    "sections": [
      {
        "h2": "Who needs tax planning",
        "list": [
          "Salaried individuals",
          "Doctors, lawyers and consultants",
          "Traders and shop owners",
          "Families planning investments or property sales"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Old versus new tax regime comparison",
          "Deduction and exemption review",
          "Capital gains planning",
          "Business structure comparison (proprietorship, LLP, company)",
          "Presumptive taxation evaluation",
          "Year-end tax checklist"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Income details and Form 16",
          "Investment, insurance and loan statements",
          "Business turnover and expenses",
          "Planned asset purchases or sales",
          "Previous return copy"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "When should I do tax planning?",
        "a": "At the start of the year, and again before March. Waiting until filing time limits the options."
      },
      {
        "q": "Is tax planning the same as tax evasion?",
        "a": "No. Planning uses legitimate provisions of the law, while evasion hides income or claims false deductions."
      },
      {
        "q": "Which regime is better for me?",
        "a": "It depends on your income and eligible deductions. We calculate both and present the tax difference."
      },
      {
        "q": "Will the new Income-tax Act, 2025 change my planning?",
        "a": "It renumbers sections and revises forms from 1 April 2026, so we align your planning with the law that applies to each year."
      }
    ],
    "related": [
      "income-tax-return-filing-siliguri",
      "advance-tax-planning-siliguri",
      "tax-audit-siliguri"
    ]
  },
  {
    "slug": "tax-audit-siliguri",
    "matchTitles": [
      "Tax Audit"
    ],
    "icon": "ClipboardCheck",
    "navTitle": "Tax Audit",
    "h1": "Tax Audit under Section 44AB in Siliguri",
    "metaTitle": "Tax Audit (Section 44AB) in Siliguri | LG & Associates",
    "metaDescription": "Tax audit in Siliguri for businesses and professionals: applicability check, Form 3CA/3CB-3CD reporting and ITR filing coordination.",
    "keywords": "tax audit siliguri, 44ab tax audit, tax audit ca siliguri, ca in siliguri",
    "lead": "A tax audit is a statutory audit of your books for income tax purposes. We determine whether it applies to you, audit the records, certify the required particulars and coordinate the return filing so everything is consistent.",
    "sections": [
      {
        "h2": "Who needs tax audit",
        "list": [
          "Businesses above the turnover limit",
          "Professionals above the receipts limit",
          "Taxpayers declaring lower profit than presumptive rates",
          "Entities with cash-transaction compliance questions"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Applicability and limit review",
          "Audit of books, ledgers and vouchers",
          "Verification of TDS, depreciation, disallowances and loans",
          "Audit report with prescribed annexures",
          "Return filing aligned with audit report",
          "Planning to avoid disallowances next year"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Trial balance and financial statements",
          "Ledgers, bank statements and loan confirmations",
          "TDS and GST returns",
          "Fixed asset register",
          "Cash and related-party transaction details"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "When is a tax audit required?",
        "a": "It applies when business turnover or professional receipts exceed prescribed limits or when certain presumptive conditions are triggered. Limits can differ with cash-transaction levels, so we verify them each year."
      },
      {
        "q": "What is the penalty for not getting a tax audit?",
        "a": "The law provides a penalty for failure to get accounts audited or furnish the report by the due date. The exact amount depends on turnover."
      },
      {
        "q": "Is tax audit the same as statutory audit?",
        "a": "No. Tax audit is a requirement under tax law, while statutory audit arises under company or LLP law. Some entities need both."
      },
      {
        "q": "What is the due date for filing returns in audit cases?",
        "a": "Audit cases have a later return due date than non-audit cases. We track the dates for the year in question."
      }
    ],
    "related": [
      "audit-and-assurance-siliguri",
      "statutory-audit-siliguri",
      "income-tax-return-filing-siliguri"
    ]
  },
  {
    "slug": "statutory-audit-siliguri",
    "matchTitles": [
      "Statutory Audit"
    ],
    "icon": "Scale",
    "navTitle": "Statutory Audit",
    "h1": "Statutory Audit in Siliguri",
    "metaTitle": "Statutory Audit in Siliguri | Companies & LLPs | LG & Associates",
    "metaDescription": "Statutory audit in Siliguri for companies, LLPs and trusts. Independent audit, financial statement review and ROC-ready reporting.",
    "keywords": "statutory audit siliguri, company audit siliguri, llp audit siliguri, ca in siliguri",
    "lead": "An independent audit gives lenders, investors and regulators confidence in your numbers. We audit financial statements in accordance with applicable standards and deliver a clear report and management observations.",
    "sections": [
      {
        "h2": "Who needs statutory audit",
        "list": [
          "Private and public limited companies",
          "LLPs above the audit threshold",
          "Trusts and societies",
          "Entities requiring audited statements for loans"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Audit planning and risk assessment",
          "Verification of balances, assets and liabilities",
          "Audit report and management letter",
          "Review of statutory compliance and related-party disclosures",
          "Support for first-time auditor appointment (ADT-1)",
          "Coordination with ROC filings"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Draft financial statements and trial balance",
          "Books of account and bank statements",
          "Fixed asset and inventory records",
          "Loan and statutory dues records",
          "Minutes of meetings and registers"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is statutory audit mandatory for every company?",
        "a": "Yes, under company law every company must have its accounts audited, irrespective of turnover or profit."
      },
      {
        "q": "When does an LLP need an audit?",
        "a": "When its turnover or contribution crosses the prescribed limits."
      },
      {
        "q": "Can the same CA do both audit and accounting?",
        "a": "The law restricts auditors from providing certain services to the same client, so we structure engagements accordingly."
      },
      {
        "q": "How long does an audit take?",
        "a": "It depends on the size and the quality of records. Well-maintained books shorten the process considerably."
      }
    ],
    "related": [
      "audit-and-assurance-siliguri",
      "tax-audit-siliguri",
      "roc-annual-filing-siliguri"
    ]
  },
  {
    "slug": "internal-audit-siliguri",
    "matchTitles": [
      "Internal Audit"
    ],
    "icon": "ClipboardCheck",
    "navTitle": "Internal Audit",
    "h1": "Internal Audit & Process Review in Siliguri",
    "metaTitle": "Internal Audit Services in Siliguri | LG & Associates",
    "metaDescription": "Internal audit and process review in Siliguri: controls testing, stock and cash verification, and management reporting by a CA firm.",
    "keywords": "internal audit siliguri, internal audit services, process review siliguri, ca in siliguri",
    "lead": "Internal audit looks beyond compliance to how your business actually operates. We test controls, find leakages and recommend practical fixes that owners can implement.",
    "sections": [
      {
        "h2": "Who needs internal audit",
        "list": [
          "Growing trading and manufacturing businesses",
          "Companies required to appoint an internal auditor",
          "Businesses with multiple branches or cash handling",
          "Owners who want independent assurance"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Process and controls review",
          "Stock, cash and receivables verification",
          "Purchase, sales and expense audit",
          "Statutory compliance health check",
          "Periodic reporting to management"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Standard operating procedures if any",
          "Ledgers and registers",
          "Stock and inventory reports",
          "Branch or unit details",
          "Prior audit observations"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is internal audit mandatory?",
        "a": "For certain classes of companies under company law. Others can opt for it voluntarily to improve control."
      },
      {
        "q": "How is internal audit different from statutory audit?",
        "a": "Statutory audit gives an opinion on the financial statements, while internal audit evaluates processes and controls throughout the year."
      },
      {
        "q": "How often should internal audit be done?",
        "a": "Most businesses choose quarterly or half-yearly reviews."
      },
      {
        "q": "What will I receive at the end?",
        "a": "A written report listing findings, risks and recommended actions with priorities."
      }
    ],
    "related": [
      "audit-and-assurance-siliguri",
      "statutory-audit-siliguri",
      "financial-statement-preparation-siliguri"
    ]
  },
  {
    "slug": "financial-statement-preparation-siliguri",
    "matchTitles": [
      "Financial Statement Preparation"
    ],
    "icon": "BarChart3",
    "navTitle": "Financial Statement Preparation",
    "h1": "Financial Statement Preparation in Siliguri",
    "metaTitle": "Financial Statement Preparation in Siliguri | LG & Associates",
    "metaDescription": "Balance sheet, profit and loss and notes prepared in Siliguri for companies, firms and proprietors. Prepared for audit and lender requirements.",
    "keywords": "financial statements siliguri, balance sheet preparation, finalisation of accounts siliguri, ca in siliguri",
    "lead": "We convert your books into accurate balance sheets, profit and loss accounts and schedules that satisfy auditors, banks and the tax department.",
    "sections": [
      {
        "h2": "Who needs financial statement preparation",
        "list": [
          "Firms and proprietors applying for bank loans",
          "Companies preparing for audit",
          "Businesses with incomplete bookkeeping",
          "Startups preparing investor reports"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Finalisation of accounts",
          "Balance sheet and profit and loss preparation",
          "Cash flow statement and notes",
          "Depreciation and provision computation",
          "Projected financials and CMA data for loans",
          "Closing-year adjustments"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Trial balance or ledgers",
          "Bank statements",
          "Fixed asset details",
          "Stock statement",
          "Loan and creditor confirmations"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What is included in financial statements?",
        "a": "A balance sheet, profit and loss account, and where applicable a cash flow statement and notes to accounts."
      },
      {
        "q": "Can you prepare accounts if my books are incomplete?",
        "a": "Yes, after a cleanup of the available records. This may take longer and costs more than regular bookkeeping."
      },
      {
        "q": "Do banks accept CA-prepared statements?",
        "a": "Banks generally require statements certified or audited by a chartered accountant, and we prepare the data in the format they ask for."
      },
      {
        "q": "Do I need audited statements for a proprietorship?",
        "a": "Only if a tax audit or a lender requires it."
      }
    ],
    "related": [
      "accounting-and-bookkeeping-siliguri",
      "statutory-audit-siliguri",
      "tax-audit-siliguri"
    ]
  },
  {
    "slug": "private-limited-company-registration-siliguri",
    "matchTitles": [
      "Private Limited Company Registration"
    ],
    "icon": "Building2",
    "navTitle": "Private Limited Company Registration",
    "h1": "Private Limited Company Registration in Siliguri",
    "metaTitle": "Private Limited Company Registration Siliguri | LG & Assoc.",
    "metaDescription": "Register a private limited company in Siliguri: name approval, DIN, MOA/AOA, PAN/TAN, GST and bank account support from a chartered accountant.",
    "keywords": "private limited company registration siliguri, company incorporation siliguri, ca in siliguri",
    "lead": "A private limited company gives limited liability, separate legal identity and easier fundraising. We manage incorporation end to end and set up post-incorporation compliance.",
    "sections": [
      {
        "h2": "Who needs private limited company registration",
        "list": [
          "Startups and founders seeking investment",
          "Family businesses moving from proprietorship",
          "Businesses requiring limited liability",
          "Joint ventures"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Name availability and reservation",
          "DIN and digital signature for directors",
          "Drafting MOA and AOA",
          "Incorporation filing with the Registrar",
          "PAN, TAN and certificate of incorporation",
          "Opening-year compliances: auditor appointment, share certificates, bank account"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "PAN and Aadhaar of directors and shareholders",
          "Passport photographs",
          "Address proof and bank statement of directors",
          "Registered office proof and NOC",
          "Proposed names and business objects"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How many directors are needed?",
        "a": "At least two directors and two shareholders, with at least one director resident in India."
      },
      {
        "q": "How long does incorporation take?",
        "a": "Usually one to two weeks if documents are clear and the name is approved."
      },
      {
        "q": "Is there a minimum capital requirement?",
        "a": "No minimum paid-up capital is prescribed, though the capital should suit your business and fee structure."
      },
      {
        "q": "What compliance follows incorporation?",
        "a": "Annual audit, financial statements and annual return with the Registrar, director KYC, and income tax and GST filings."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "llp-registration-siliguri",
      "one-person-company-registration-siliguri",
      "roc-annual-filing-siliguri"
    ]
  },
  {
    "slug": "llp-registration-siliguri",
    "matchTitles": [
      "LLP Registration"
    ],
    "icon": "Building2",
    "navTitle": "LLP Registration",
    "h1": "LLP Registration in Siliguri",
    "metaTitle": "LLP Registration in Siliguri | LG & Associates",
    "metaDescription": "Limited Liability Partnership registration in Siliguri: name approval, LLP agreement, FiLLiP filing and compliance support by CA Lalit Gupta.",
    "keywords": "llp registration siliguri, limited liability partnership siliguri, ca in siliguri",
    "lead": "An LLP combines limited liability with a flexible partnership structure and lower compliance than a company. We handle the filings and the agreement so your roles and profit sharing are clearly documented.",
    "sections": [
      {
        "h2": "Who needs llp registration",
        "list": [
          "Professional firms",
          "Traders and service businesses",
          "Partners seeking liability protection",
          "Existing partnerships wanting to convert"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Name reservation",
          "DPIN and digital signature",
          "FiLLiP incorporation filing",
          "LLP agreement drafting and filing",
          "PAN, TAN and GST registration",
          "Annual compliance: Form 11 and Form 8"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "PAN and Aadhaar of partners",
          "Photographs and address proof",
          "Registered office proof",
          "Capital contribution and profit-share details",
          "Proposed LLP names"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How many partners are required?",
        "a": "At least two partners and two designated partners, one of whom must be resident in India."
      },
      {
        "q": "Does an LLP need an audit?",
        "a": "Only when turnover or contribution crosses the prescribed limits, though annual filings are mandatory regardless."
      },
      {
        "q": "LLP or private limited, which is better?",
        "a": "LLP suits professional and closely held businesses, while a company is better for equity funding and employee stock options."
      },
      {
        "q": "Can my partnership firm convert to an LLP?",
        "a": "Yes, through a prescribed conversion process that carries over its business and records."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "private-limited-company-registration-siliguri",
      "partnership-firm-registration-siliguri",
      "roc-annual-filing-siliguri"
    ]
  },
  {
    "slug": "one-person-company-registration-siliguri",
    "matchTitles": [
      "One Person Company Registration"
    ],
    "icon": "Briefcase",
    "navTitle": "One Person Company Registration",
    "h1": "One Person Company (OPC) Registration in Siliguri",
    "metaTitle": "OPC Registration in Siliguri | LG & Associates",
    "metaDescription": "OPC registration in Siliguri for solo founders: nominee, DIN, MOA/AOA and incorporation with end-to-end CA support.",
    "keywords": "opc registration siliguri, one person company siliguri, ca in siliguri",
    "lead": "An OPC lets a single founder run a company with limited liability. We handle the nominee, documentation and filings, and explain how an OPC can later be converted into a private limited company.",
    "sections": [
      {
        "h2": "Who needs one person company registration",
        "list": [
          "Solo entrepreneurs and freelancers",
          "Consultants who want limited liability",
          "Small businesses in early stage",
          "Founders planning to scale later"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Eligibility check for the founder",
          "Nominee appointment documentation",
          "DIN, DSC and name approval",
          "MOA, AOA and incorporation filing",
          "PAN, TAN and opening-year compliance",
          "Guidance on conversion to Pvt Ltd"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "PAN and Aadhaar of member and nominee",
          "Photographs and address proof",
          "Registered office proof",
          "Nominee consent",
          "Proposed name and objects"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Who can form an OPC?",
        "a": "A natural person who is an Indian citizen and resident, subject to the conditions in company law."
      },
      {
        "q": "Why is a nominee needed?",
        "a": "The nominee steps in if the sole member dies or becomes incapacitated."
      },
      {
        "q": "Can an OPC raise equity funding?",
        "a": "Not easily, since it has a single member. Founders who expect investors usually convert to a private limited company."
      },
      {
        "q": "What are the annual compliances?",
        "a": "Audit, annual return and financial statements with the Registrar, director KYC, plus tax filings."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "private-limited-company-registration-siliguri",
      "dir-3-kyc-filing-siliguri"
    ]
  },
  {
    "slug": "partnership-firm-registration-siliguri",
    "matchTitles": [
      "Partnership Firm Registration"
    ],
    "icon": "Users",
    "navTitle": "Partnership Firm Registration",
    "h1": "Partnership Firm Registration & Deed in Siliguri",
    "metaTitle": "Partnership Firm Registration Siliguri | LG & Associates",
    "metaDescription": "Partnership deed drafting and firm registration in Siliguri: PAN, GST, bank account and Udyam support from a chartered accountant.",
    "keywords": "partnership deed siliguri, partnership firm registration siliguri, ca in siliguri",
    "lead": "A well-drafted partnership deed prevents disputes over capital, profit sharing, remuneration and exit. We draft the deed and set up the firm's tax and banking identity.",
    "sections": [
      {
        "h2": "Who needs partnership firm registration",
        "list": [
          "Family and trading businesses",
          "Professionals starting a joint practice",
          "Existing firms needing deed amendment",
          "Firms planning conversion to LLP"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Partnership deed drafting",
          "Firm registration with the Registrar of Firms",
          "PAN, GST and bank account setup",
          "Reconstitution, retirement and admission of partners",
          "Dissolution documentation"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "PAN and Aadhaar of partners",
          "Photographs and address proof",
          "Business premises proof",
          "Capital and profit-sharing agreement",
          "Proposed firm name"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is registration of a partnership firm compulsory?",
        "a": "It is optional, but an unregistered firm faces limitations in enforcing claims in court, so registration is advisable."
      },
      {
        "q": "What should a partnership deed contain?",
        "a": "Names, capital, profit ratio, interest and remuneration, powers, banking, admission and retirement terms, and dispute resolution."
      },
      {
        "q": "Do partners have limited liability?",
        "a": "No. Partners are jointly and severally liable for the firm's obligations, which is a key reason many choose an LLP."
      },
      {
        "q": "How is a firm taxed?",
        "a": "As a separate entity at a flat rate with rules on partner remuneration and interest. We help compute it."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "llp-registration-siliguri",
      "private-limited-company-registration-siliguri"
    ]
  },
  {
    "slug": "roc-annual-filing-siliguri",
    "matchTitles": [
      "ROC Compliance & Annual Filing"
    ],
    "icon": "Landmark",
    "navTitle": "ROC Compliance & Annual Filing",
    "h1": "ROC Compliance & Annual Filing in Siliguri",
    "metaTitle": "ROC Annual Filing in Siliguri | LG & Associates",
    "metaDescription": "ROC compliance in Siliguri: AOC-4, MGT-7, ADT-1, LLP Form 11 and Form 8, DPT-3 and event-based filings by a chartered accountant.",
    "keywords": "roc compliance siliguri, aoc-4 mgt-7 filing siliguri, llp form 11 form 8, ca in siliguri",
    "lead": "Missing ROC filings leads to additional fees that run per day, director disqualification and strike-off risk. We keep your company or LLP's filings current and our calendar warns you well before each deadline.",
    "sections": [
      {
        "h2": "Who needs roc compliance & annual filing",
        "list": [
          "Private and public companies",
          "LLPs",
          "Dormant and inactive entities",
          "Companies with overdue filings"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "AOC-4 and MGT-7 or MGT-7A filing",
          "ADT-1 auditor appointment",
          "LLP Form 11 and Form 8",
          "DPT-3 return of deposits",
          "Director change, address change and share allotment filings",
          "Condonation and regularisation of delayed filings",
          "Strike-off and dormant status applications"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Audited financial statements",
          "Board and shareholder resolutions",
          "Director and shareholder details",
          "Digital signatures of directors",
          "Previous filings and SRNs"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "What are the annual ROC filings for a company?",
        "a": "Financial statements through AOC-4 and the annual return through MGT-7 or MGT-7A, along with the appointment or reappointment of an auditor and other event-based forms."
      },
      {
        "q": "What are the consequences of late ROC filing?",
        "a": "Additional fees apply per day of delay, and persistent default can lead to penalties and director disqualification."
      },
      {
        "q": "My company has no business, do I still file?",
        "a": "Yes. Inactive companies still file annual returns and financial statements unless they take formal steps such as dormant status or strike-off."
      },
      {
        "q": "Can overdue filings be regularised?",
        "a": "Yes, by filing the pending returns with additional fees, and sometimes through a one-time scheme if the government offers one."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "dir-3-kyc-filing-siliguri",
      "statutory-audit-siliguri"
    ]
  },
  {
    "slug": "dir-3-kyc-filing-siliguri",
    "matchTitles": [
      "DIR-3 KYC Filing"
    ],
    "icon": "FileCheck",
    "navTitle": "DIR-3 KYC Filing",
    "h1": "DIR-3 KYC Filing & Director Compliance in Siliguri",
    "metaTitle": "DIR-3 KYC Filing in Siliguri | Director KYC | LG & Associates",
    "metaDescription": "DIR-3 KYC and web-based KYC filing in Siliguri for company and LLP directors. Reactivate a deactivated DIN with CA support.",
    "keywords": "dir 3 kyc siliguri, director kyc filing, din reactivation, ca in siliguri",
    "lead": "Every director holding a DIN must complete KYC annually or the DIN is deactivated. We file the KYC and, if a DIN has already been deactivated, help reactivate it.",
    "sections": [
      {
        "h2": "Who needs dir-3 kyc filing",
        "list": [
          "Directors of companies",
          "Designated partners of LLPs",
          "Directors with deactivated DINs",
          "Individuals planning to become directors"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Annual DIR-3 KYC web-based filing",
          "DIR-3 KYC with form for new or changed details",
          "DIN reactivation",
          "Mobile and email verification support",
          "Director disclosure forms (DIR-8, MBP-1) and related records"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "PAN and Aadhaar",
          "Passport-size photograph",
          "Passport or voter ID or driving licence if needed",
          "Address proof",
          "Mobile number and email linked to the DIN"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "How often is director KYC required?",
        "a": "Annually, by the date prescribed under the rules, which is generally 30 September for the preceding financial year."
      },
      {
        "q": "What happens if I miss the DIR-3 KYC?",
        "a": "The DIN is marked deactivated and a fee is payable to reactivate it. The director cannot sign filings meanwhile."
      },
      {
        "q": "Is DIR-3 KYC required for LLP partners too?",
        "a": "Yes, designated partners and other partners holding a DIN must complete KYC."
      },
      {
        "q": "Can you do KYC for several directors at once?",
        "a": "Yes. We handle multiple directors and keep a tracker for your company."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "roc-annual-filing-siliguri",
      "private-limited-company-registration-siliguri"
    ]
  },
  {
    "slug": "payroll-services-siliguri",
    "matchTitles": [
      "Payroll & Compliance Support"
    ],
    "icon": "Wallet",
    "navTitle": "Payroll & Compliance Support",
    "h1": "Payroll Support & Statutory Compliance in Siliguri",
    "metaTitle": "Payroll Services in Siliguri | LG & Associates",
    "metaDescription": "Payroll processing and compliance in Siliguri: salary statements, PF, ESI, West Bengal professional tax and TDS on salary.",
    "keywords": "payroll services siliguri, pf esi compliance siliguri, professional tax west bengal, ca in siliguri",
    "lead": "We run your payroll and keep employer registrations and returns in order, so salaries, deductions and filings are accurate and on time every month.",
    "sections": [
      {
        "h2": "Who needs payroll & compliance support",
        "list": [
          "Small and medium businesses with staff",
          "Firms without an HR team",
          "Businesses newly crossing the PF or ESI limits",
          "Employers needing salary TDS and Form 16"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Monthly salary processing and payslips",
          "PF and ESI registration and returns",
          "West Bengal professional tax compliance",
          "TDS on salary and Form 16",
          "Full and final settlement calculations",
          "Gratuity and bonus guidance"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "Employee master data with PAN and Aadhaar",
          "Attendance and leave records",
          "Salary structure",
          "Bank details",
          "PF, ESI and PT registration numbers"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "When does PF registration become mandatory?",
        "a": "Generally for establishments that cross the employee-count threshold under the PF law. Others can register voluntarily."
      },
      {
        "q": "Who is covered by ESI?",
        "a": "Employees earning up to the prescribed wage ceiling in establishments covered by the ESI Act."
      },
      {
        "q": "Is professional tax applicable in West Bengal?",
        "a": "Yes, it is levied under the state's professional tax law on employers and professionals as prescribed."
      },
      {
        "q": "Can you process payroll for very few employees?",
        "a": "Yes. We support small teams as well as growing ones."
      }
    ],
    "related": [
      "accounting-and-bookkeeping-siliguri",
      "tds-tcs-compliance-siliguri",
      "income-tax-return-filing-siliguri"
    ]
  },
  {
    "slug": "udyam-msme-registration-siliguri",
    "matchTitles": [
      "Udyam (MSME) Registration"
    ],
    "icon": "Briefcase",
    "navTitle": "Udyam (MSME) Registration",
    "h1": "Udyam (MSME) Registration in Siliguri",
    "metaTitle": "Udyam MSME Registration in Siliguri | LG & Associates",
    "metaDescription": "Udyam registration for micro, small and medium enterprises in Siliguri. Registration and guidance on benefits, loans and schemes.",
    "keywords": "udyam registration siliguri, msme registration siliguri, ca in siliguri",
    "lead": "Udyam registration gives your business formal MSME recognition, which can help with bank credit, government schemes and delayed-payment protection. We complete it correctly the first time and keep details updated.",
    "sections": [
      {
        "h2": "Who needs udyam (msme) registration",
        "list": [
          "Proprietors, firms, LLPs and companies",
          "Manufacturers and service providers",
          "Businesses seeking priority sector loans",
          "Businesses selling to government or large buyers"
        ]
      },
      {
        "h2": "What our service covers",
        "list": [
          "Eligibility and classification check",
          "Udyam portal application",
          "Linking with PAN and GST data",
          "Updating turnover and investment details",
          "Certificate download and renewal support"
        ]
      },
      {
        "h2": "Documents usually required",
        "list": [
          "PAN and Aadhaar of proprietor or authorised signatory",
          "GST number if available",
          "Bank details",
          "Business address and activity",
          "NIC code details"
        ],
        "note": "The exact list depends on your case. We share a tailored checklist after an initial discussion."
      },
      {
        "h2": "How we work",
        "list": [
          "Initial discussion: we understand your situation, deadlines and documents.",
          "Scope: you receive a clear scope and quote before work starts.",
          "Preparation and filing: we prepare, review and file with the authority concerned.",
          "Confirmation and follow-up: you receive acknowledgements and reminders for the next due date."
        ]
      }
    ],
    "faqs": [
      {
        "q": "Is Udyam registration free?",
        "a": "The government portal does not charge a fee for Udyam registration. Professional charges, if any, are for our assistance."
      },
      {
        "q": "What benefits does Udyam give?",
        "a": "Benefits can include priority sector lending, collateral-free credit schemes, and some tax and subsidy benefits."
      },
      {
        "q": "Do I need GST to register under Udyam?",
        "a": "GST is not always required, but it must be linked where the business is already registered."
      },
      {
        "q": "Do I need to renew it every year?",
        "a": "There is no renewal, but you must update turnover and investment details as the portal requires."
      }
    ],
    "related": [
      "company-and-llp-registration-siliguri",
      "gst-registration-and-returns-siliguri",
      "accounting-and-bookkeeping-siliguri"
    ]
  }
];

// Extra "related service" links to show on the six existing hub pages.
export const HUB_RELATED = {
  "income-tax-return-filing-siliguri": [
    "income-tax-notice-reply-siliguri",
    "tax-planning-siliguri",
    "advance-tax-planning-siliguri"
  ],
  "gst-registration-and-returns-siliguri": [
    "gst-annual-return-gstr-9-siliguri",
    "gst-notice-reply-siliguri"
  ],
  "audit-and-assurance-siliguri": [
    "tax-audit-siliguri",
    "statutory-audit-siliguri",
    "internal-audit-siliguri"
  ],
  "accounting-and-bookkeeping-siliguri": [
    "financial-statement-preparation-siliguri",
    "payroll-services-siliguri"
  ],
  "tds-tcs-compliance-siliguri": [
    "payroll-services-siliguri",
    "income-tax-notice-reply-siliguri"
  ],
  "company-and-llp-registration-siliguri": [
    "private-limited-company-registration-siliguri",
    "llp-registration-siliguri",
    "one-person-company-registration-siliguri",
    "partnership-firm-registration-siliguri",
    "roc-annual-filing-siliguri",
    "dir-3-kyc-filing-siliguri"
  ]
};
