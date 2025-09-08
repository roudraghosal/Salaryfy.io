'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, PiggyBank, TrendingUp, Shield, CreditCard, Target, Clock, DollarSign } from 'lucide-react'

const categories = [
    { id: 'all', label: 'All Topics', icon: BookOpen },
    { id: 'savings', label: 'Savings', icon: PiggyBank },
    { id: 'investments', label: 'Investments', icon: TrendingUp },
    { id: 'insurance', label: 'Insurance', icon: Shield },
    { id: 'budgeting', label: 'Budgeting', icon: Target },
]

const articles = [
    {
        id: 1,
        title: 'Emergency Fund: Your Financial Safety Net',
        category: 'savings',
        readTime: '5 min read',
        difficulty: 'Beginner',
        excerpt: 'Learn why having 3-6 months of expenses saved is crucial for financial security and how to build your emergency fund step by step.',
        content: `
An emergency fund is a crucial component of personal financial planning that acts as a financial safety net during unexpected situations. Here's everything you need to know about building and maintaining an emergency fund.

**Why You Need an Emergency Fund**

Life is unpredictable. Medical emergencies, job loss, car repairs, or home maintenance issues can arise without warning. An emergency fund provides financial security and peace of mind, preventing you from falling into debt during tough times.

**How Much Should You Save?**

Financial experts typically recommend saving 3-6 months' worth of living expenses. However, the exact amount depends on:
- Job stability and industry
- Number of dependents
- Health conditions
- Other income sources

**Steps to Build Your Emergency Fund**

1. **Calculate Your Monthly Expenses**: Include rent, utilities, groceries, insurance, and other essential costs.

2. **Set a Realistic Goal**: Start with ₹10,000-₹25,000 if you're just beginning, then work toward your full target.

3. **Choose the Right Account**: Keep your emergency fund in a high-yield savings account that's easily accessible but separate from your checking account.

4. **Automate Your Savings**: Set up automatic transfers to make saving effortless.

5. **Start Small**: Even ₹500-₹1000 per month can build a substantial emergency fund over time.

**When to Use Your Emergency Fund**

Use your emergency fund only for true emergencies:
- Unexpected medical expenses
- Job loss or significant income reduction
- Major car or home repairs
- Family emergencies

Remember, vacations, shopping, or planned expenses don't qualify as emergencies.

**Replenishing Your Fund**

After using your emergency fund, make replenishing it a priority. Treat it like a bill that must be paid until you're back to your target amount.

Building an emergency fund requires discipline and patience, but it's one of the most important financial steps you can take for long-term security.
    `,
        icon: Shield,
        color: 'bg-green-500'
    },
    {
        id: 2,
        title: 'SIP vs Lump Sum: Which Investment Strategy Wins?',
        category: 'investments',
        readTime: '7 min read',
        difficulty: 'Intermediate',
        excerpt: 'Compare systematic investment plans (SIP) with lump sum investments to understand which strategy works best for different financial goals.',
        content: `
When it comes to investing in mutual funds, you have two primary options: Systematic Investment Plan (SIP) or Lump Sum investment. Both have their advantages and are suitable for different situations.

**What is SIP?**

SIP allows you to invest a fixed amount regularly (monthly, quarterly) into mutual funds. It's like creating a disciplined saving and investment habit.

**Advantages of SIP:**
- Rupee Cost Averaging: You buy more units when prices are low and fewer when prices are high
- Disciplined investing habit
- Lower financial burden
- Reduces market timing risk
- Compound growth benefits

**What is Lump Sum Investment?**

Lump sum involves investing a large amount at once into mutual funds or other investment vehicles.

**Advantages of Lump Sum:**
- Potentially higher returns in bull markets
- Immediate exposure to market gains
- Lower transaction costs
- Suitable when you have surplus funds

**Which Strategy to Choose?**

**Choose SIP when:**
- You have regular income but limited surplus
- You're risk-averse or new to investing
- Market timing is uncertain
- You want to build disciplined investing habits

**Choose Lump Sum when:**
- You have substantial surplus funds
- Market valuations are attractive
- You have investment experience
- You can stay invested for long periods

**Real Example:**

Let's say you want to invest ₹1,20,000 in a year:

*SIP Approach:* ₹10,000 monthly for 12 months
*Lump Sum Approach:* ₹1,20,000 invested at the beginning

In volatile markets, SIP often performs better due to averaging. In consistently rising markets, lump sum might give higher returns.

**The Hybrid Approach:**

Many successful investors use both strategies:
- SIP for regular investments from salary
- Lump sum for bonuses, windfalls, or when markets are significantly down

**Key Takeaways:**

1. SIP is generally better for most investors due to its disciplined approach
2. Lump sum can work well in specific market conditions
3. Your choice should align with your financial situation and risk tolerance
4. Consistency is more important than timing the market

Remember, the best investment strategy is the one you can stick to consistently over the long term.
    `,
        icon: TrendingUp,
        color: 'bg-blue-500'
    },
    {
        id: 3,
        title: '50/30/20 Rule: Simple Budgeting Made Easy',
        category: 'budgeting',
        readTime: '4 min read',
        difficulty: 'Beginner',
        excerpt: 'Master your finances with the popular 50/30/20 budgeting rule. Learn how to allocate your income for needs, wants, and savings.',
        content: `
The 50/30/20 rule is one of the most popular and straightforward budgeting methods that helps you manage your money effectively without complex calculations.

**What is the 50/30/20 Rule?**

This rule suggests dividing your after-tax income into three categories:
- 50% for Needs (essentials)
- 30% for Wants (lifestyle)
- 20% for Savings and Debt Repayment

**50% for Needs**

These are expenses you cannot avoid:
- Rent or mortgage payments
- Utilities (electricity, water, gas)
- Groceries and basic food
- Transportation costs
- Insurance premiums
- Minimum debt payments
- Phone bills

If your needs exceed 50%, look for ways to reduce costs like finding a cheaper apartment or reducing utility usage.

**30% for Wants**

These enhance your lifestyle but aren't essential:
- Dining out and entertainment
- Hobbies and recreation
- Shopping for non-essentials
- Subscriptions (Netflix, gym)
- Vacations
- Upgraded gadgets

This category gives you flexibility to enjoy life while staying within budget.

**20% for Savings and Debt Repayment**

This portion secures your financial future:
- Emergency fund
- Retirement savings (EPF, PPF, mutual funds)
- Additional loan payments
- Investment goals
- Insurance (beyond basic needs)

**Implementing the 50/30/20 Rule**

**Step 1:** Calculate your monthly after-tax income
**Step 2:** Multiply by 0.5, 0.3, and 0.2 to get your budget allocations
**Step 3:** Track your expenses for a month
**Step 4:** Adjust spending to fit the categories

**Example Budget (₹60,000 monthly income):**
- Needs: ₹30,000 (50%)
- Wants: ₹18,000 (30%)
- Savings: ₹12,000 (20%)

**Customizing the Rule**

The 50/30/20 rule is a starting point. You might adjust based on:
- High cost of living areas (60/20/20)
- Aggressive savers (50/20/30)
- Debt payoff phase (50/10/40)
- Early career (60/30/10)

**Benefits of This Approach:**
- Simple to understand and implement
- Balances current enjoyment with future security
- Prevents overspending in any category
- Builds healthy financial habits

**Common Mistakes to Avoid:**
- Miscategorizing wants as needs
- Not tracking expenses accurately
- Being too rigid without adjusting for life changes
- Ignoring irregular income variations

**Making It Work:**

1. **Automate savings:** Set up automatic transfers for the 20% savings portion
2. **Use separate accounts:** Keep wants and needs money in different accounts
3. **Regular reviews:** Check your budget monthly and adjust as needed
4. **Be realistic:** Start with small changes rather than drastic cuts

The 50/30/20 rule provides a balanced framework for financial success, ensuring you live comfortably today while securing your tomorrow.
    `,
        icon: Target,
        color: 'bg-purple-500'
    },
    {
        id: 4,
        title: 'Understanding Different Types of Insurance',
        category: 'insurance',
        readTime: '6 min read',
        difficulty: 'Intermediate',
        excerpt: 'Navigate the insurance landscape and learn which policies you need to protect yourself and your family from financial risks.',
        content: `
Insurance is a crucial component of financial planning that protects you from significant financial losses. Understanding different types of insurance helps you make informed decisions about what coverage you need.

**Why Insurance Matters**

Insurance transfers financial risk from you to the insurance company. Without proper coverage, unexpected events could derail your financial goals and create substantial debt.

**Types of Insurance You Should Consider**

**1. Life Insurance**

Provides financial support to your dependents after your death.

*Term Life Insurance:*
- Provides coverage for a specific period (10-30 years)
- Lower premiums
- No investment component
- Best for most people

*Whole Life Insurance:*
- Provides lifelong coverage
- Includes investment component
- Higher premiums
- More complex

**2. Health Insurance**

Covers medical expenses and hospitalization costs.

*Benefits:*
- Protection against rising medical costs
- Cashless treatment at network hospitals
- Tax benefits under Section 80D
- Family coverage options

*What to Look For:*
- Adequate coverage amount (minimum ₹5-10 lakhs)
- Network hospitals in your area
- Coverage for pre and post-hospitalization
- Maternity benefits if needed

**3. Disability Insurance**

Replaces income if you cannot work due to illness or injury.

*Short-term Disability:* Covers 3-12 months
*Long-term Disability:* Can cover until retirement

**4. Property Insurance**

*Home Insurance:*
- Protects your home and belongings
- Covers natural disasters, theft, fire
- Liability coverage for accidents on your property

*Vehicle Insurance:*
- Legally required for all vehicles
- Third-party liability (mandatory)
- Comprehensive coverage (recommended)

**How Much Insurance Do You Need?**

**Life Insurance:**
- Rule of thumb: 10-12 times your annual income
- Consider debts, future expenses, and dependents' needs
- Adjust for existing savings and other insurance

**Health Insurance:**
- Minimum ₹5 lakhs per person in metro cities
- ₹10+ lakhs for families
- Consider additional top-up plans for higher coverage

**Disability Insurance:**
- 60-70% of your current income
- Consider both short and long-term needs

**Common Insurance Mistakes**

1. **Under-insuring:** Having insufficient coverage amounts
2. **Over-insuring:** Buying unnecessary or excessive coverage
3. **Mixing investment with insurance:** Choosing investment-linked policies when term insurance + separate investments work better
4. **Not reviewing regularly:** Failing to update coverage as life changes
5. **Focusing only on premium:** Choosing based on cost alone, ignoring coverage quality

**Smart Insurance Buying Tips**

1. **Buy young:** Premiums are lower when you're younger and healthier
2. **Compare policies:** Don't buy the first policy you see
3. **Read the fine print:** Understand exclusions and waiting periods
4. **Maintain good health:** Some policies offer discounts for healthy lifestyles
5. **Use tax benefits:** Many insurance premiums qualify for tax deductions

**Insurance Priority Order**

1. **Health Insurance** - Immediate need, high impact
2. **Life Insurance** - If you have dependents
3. **Vehicle Insurance** - Legally required
4. **Disability Insurance** - Often overlooked but important
5. **Property Insurance** - Protects major assets

**When to Review Your Insurance**

- Marriage or divorce
- Birth of a child
- Job change or promotion
- Buying a home
- Significant health changes
- Every 2-3 years as a general practice

Remember, insurance is not an investment—it's protection. The goal is to have adequate coverage at reasonable costs, allowing you to invest your money in more appropriate vehicles for wealth building.

Choose reputable insurance companies with good claim settlement ratios and customer service records. Your financial security depends on their ability to honor claims when you need them most.
    `,
        icon: Shield,
        color: 'bg-red-500'
    },
    {
        id: 5,
        title: 'Compound Interest: The 8th Wonder of the World',
        category: 'investments',
        readTime: '5 min read',
        difficulty: 'Beginner',
        excerpt: 'Discover how compound interest can dramatically grow your wealth over time and why starting early makes all the difference.',
        content: `
Albert Einstein allegedly called compound interest "the eighth wonder of the world," and for good reason. Understanding and harnessing compound interest is one of the most powerful tools for building long-term wealth.

**What is Compound Interest?**

Compound interest is earning interest on both your original investment (principal) and on previously earned interest. Unlike simple interest, which only earns on the principal, compound interest grows exponentially over time.

**Simple vs. Compound Interest Example**

Investment: ₹1,00,000 at 10% annual interest for 10 years

*Simple Interest:*
- Interest each year: ₹10,000
- Total after 10 years: ₹2,00,000

*Compound Interest:*
- Year 1: ₹1,10,000
- Year 2: ₹1,21,000
- Year 10: ₹2,59,374

The difference? ₹59,374 more with compound interest!

**The Power of Time**

The magic of compound interest becomes more apparent over longer periods:

**Starting at Age 25:**
- Monthly investment: ₹5,000
- Annual return: 12%
- Amount at age 60: ₹5.3 crores

**Starting at Age 35:**
- Monthly investment: ₹5,000  
- Annual return: 12%
- Amount at age 60: ₹1.76 crores

Starting just 10 years earlier results in 3 times more wealth!

**The Rule of 72**

This simple rule helps you calculate how long it takes for your money to double:

72 ÷ Interest Rate = Years to Double

Examples:
- 6% return: 72 ÷ 6 = 12 years to double
- 12% return: 72 ÷ 12 = 6 years to double

**Factors That Maximize Compound Growth**

**1. Start Early**
Time is your biggest advantage. Even small amounts invested early can outperform larger amounts invested later.

**2. Stay Consistent**
Regular investments through SIPs harness both compound interest and rupee cost averaging.

**3. Reinvest Returns**
Always reinvest dividends and interest rather than spending them.

**4. Choose Higher Returns**
Within your risk tolerance, seek investments that offer higher potential returns.

**5. Minimize Taxes and Fees**
High fees and taxes can significantly reduce compounding effects.

**Real-World Applications**

**Retirement Planning:**
Starting SIP of ₹10,000 monthly at age 25 with 12% returns = ₹10.6 crores by age 60

**Children's Education:**
₹5,000 monthly from birth with 10% returns = ₹18 lakhs by age 18

**Wealth Building:**
₹15,000 monthly for 20 years at 15% returns = ₹2.3 crores

**Investment Vehicles That Offer Compounding**

1. **Mutual Funds (Growth Option):** Returns are reinvested automatically
2. **Fixed Deposits:** If interest is reinvested rather than withdrawn
3. **Stocks:** Through dividend reinvestment and capital appreciation
4. **PPF:** 15-year lock-in with annual compounding
5. **ELSS Funds:** Tax-saving with growth potential

**Common Compound Interest Mistakes**

1. **Starting Too Late:** Procrastination costs exponentially
2. **Withdrawing Early:** Breaking the compounding chain
3. **Not Reinvesting:** Taking profits instead of compounding them
4. **Chasing Quick Returns:** High-risk investments may interrupt compounding
5. **Ignoring Inflation:** Not accounting for inflation in return calculations

**Compound Interest in Debt**

Compound interest works against you with debt:
- Credit card debt compounds monthly
- Personal loans compound interest charges
- Late payment penalties compound quickly

This is why paying off high-interest debt should be a priority before investing.

**Making Compound Interest Work for You**

1. **Start Today:** Don't wait for the "perfect" time
2. **Automate Investments:** Set up systematic investment plans
3. **Increase Contributions:** Raise your investment amount annually
4. **Stay Patient:** Don't disturb your investments for short-term needs
5. **Diversify Wisely:** Balance growth potential with risk management

**The Compound Interest Mindset**

Think long-term in all financial decisions:
- Every ₹100 invested today could be worth ₹1,000+ in 25 years
- Small sacrifices now lead to financial freedom later
- Consistency beats perfection in timing

**Practical Exercise**

Calculate your compound interest potential:
1. Determine how much you can invest monthly
2. Research realistic return expectations for your chosen investments
3. Use online compound interest calculators
4. Set up automatic investments
5. Review and increase contributions annually

Remember, compound interest rewards patience and punishes procrastination. The best time to start was yesterday; the second-best time is today. Even if you're starting later in life, compound interest can still work powerfully for your remaining investment years.

The key is understanding that compound interest isn't just about money—it's about time, consistency, and the exponential growth that comes from reinvesting your returns. Make compound interest your financial ally, and watch your wealth grow beyond what simple arithmetic would suggest possible.
    `,
        icon: TrendingUp,
        color: 'bg-indigo-500'
    },
    {
        id: 6,
        title: 'Building Your Credit Score: A Complete Guide',
        category: 'budgeting',
        readTime: '8 min read',
        difficulty: 'Intermediate',
        excerpt: 'Learn how credit scores work, why they matter, and practical strategies to build and maintain an excellent credit rating.',
        content: `
Your credit score is a three-digit number that can significantly impact your financial life. Understanding how it works and how to improve it can save you lakhs of rupees over your lifetime.

**What is a Credit Score?**

A credit score is a numerical representation of your creditworthiness, typically ranging from 300 to 850 in India. It's calculated based on your credit history and helps lenders assess the risk of lending to you.

**Credit Score Ranges:**
- 750-900: Excellent
- 700-749: Good  
- 650-699: Fair
- 600-649: Poor
- Below 600: Very Poor

**Why Your Credit Score Matters**

**Lower Interest Rates:**
- Excellent score: 9-11% home loan interest
- Poor score: 12-15% home loan interest
- On a ₹50 lakh loan, this difference costs ₹8-12 lakhs over 20 years!

**Loan Approval:**
- Higher scores increase approval chances
- Better scores mean larger loan amounts
- Faster processing with excellent scores

**Other Benefits:**
- Better credit card offers
- Higher credit limits
- Lower insurance premiums (in some cases)
- Easier rental approvals
- Employment opportunities (some companies check credit)

**Factors That Affect Your Credit Score**

**1. Payment History (35%)**
- On-time payments boost your score
- Late payments, defaults hurt significantly
- Even one 30-day late payment can drop your score by 60-100 points

**2. Credit Utilization (30%)**
- Keep credit card usage below 30% of limit
- Lower is better (ideally under 10%)
- High utilization suggests financial stress

**3. Length of Credit History (15%)**
- Longer history is better
- Average age of accounts matters
- Don't close old credit cards

**4. Credit Mix (10%)**
- Having different types of credit (cards, loans) helps
- Shows you can manage various credit products
- Don't take unnecessary loans just for credit mix

**5. New Credit Inquiries (10%)**
- Multiple inquiries in short periods hurt your score
- Hard inquiries stay on report for 2 years
- Soft inquiries (checking your own score) don't hurt

**How to Build Your Credit Score**

**If You're Starting Fresh:**

1. **Get a Secured Credit Card**
   - Backed by fixed deposit
   - Easier approval for beginners
   - Use responsibly to build history

2. **Become an Authorized User**
   - Ask family members to add you to their card
   - Their good payment history can help your score

3. **Consider Credit Builder Loans**
   - Some banks offer these specifically for building credit
   - Small loans with collateral

**If You Have Existing Credit:**

1. **Pay All Bills on Time**
   - Set up automatic payments
   - Pay at least minimum amounts
   - Ideally, pay full balances

2. **Keep Credit Utilization Low**
   - Use less than 30% of available credit
   - Pay down balances before statement dates
   - Request credit limit increases

3. **Don't Close Old Accounts**
   - Keep old cards active with small purchases
   - Length of history helps your score
   - Closing cards reduces available credit

4. **Monitor Your Credit Report**
   - Check for errors and dispute them
   - Watch for fraudulent accounts
   - Get free annual reports from CIBIL, Experian

**Advanced Credit Building Strategies**

**Multiple Payment Dates:**
- Make payments twice monthly
- Keeps utilization consistently low
- Shows active account management

**Strategic Credit Limit Increases:**
- Request increases annually
- Lowers utilization ratio automatically
- Don't increase spending with higher limits

**Balance Transfer Optimization:**
- Use 0% introductory rates wisely
- Pay down debt faster with lower interest
- Don't accumulate new debt on cleared cards

**Credit Score Improvement Timeline**

**30-60 Days:**
- Lower credit utilization shows up
- Paying down balances helps immediately

**60-90 Days:**
- Consistent on-time payments begin to help
- Corrected errors appear on reports

**3-6 Months:**
- Significant score improvements possible
- New positive payment history establishes

**6+ Months:**
- Major score improvements with consistent good habits
- Qualifying for better loan rates

**Common Credit Score Mistakes**

1. **Making Only Minimum Payments**
   - Keeps utilization high
   - Costs more in interest
   - Shows potential financial stress

2. **Closing Old Credit Cards**
   - Reduces available credit
   - Shortens credit history
   - Can hurt utilization ratios

3. **Applying for Multiple Credit Products Quickly**
   - Multiple hard inquiries hurt score
   - Suggests desperate need for credit
   - Space applications 6+ months apart

4. **Ignoring Credit Reports**
   - Errors can persist and hurt score
   - Identity theft may go unnoticed
   - Missing optimization opportunities

5. **Co-signing Loans Carelessly**
   - You're responsible if they don't pay
   - Their payment history affects your score
   - Difficult to remove yourself later

**Credit Score Myths Debunked**

**Myth:** Checking your credit score hurts it
**Truth:** Soft inquiries don't affect your score

**Myth:** You need to carry a balance to build credit
**Truth:** Paying in full each month is better

**Myth:** Closing cards improves your score
**Truth:** Usually hurts by reducing available credit

**Myth:** Income affects your credit score
**Truth:** Income isn't directly factored into scores

**Emergency Credit Repair**

If you need to improve your score quickly:

1. **Pay down credit card balances immediately**
2. **Ask for goodwill deletions on late payments**
3. **Dispute any errors on your credit report**
4. **Request credit limit increases**
5. **Pay multiple times per month to keep utilization low**

**Maintaining Excellent Credit**

Once you achieve a good score:

- Continue all good habits that built your score
- Review credit reports quarterly
- Take advantage of better rates and terms
- Help family members build their credit
- Stay informed about credit industry changes

**Tools and Resources**

- **Free Credit Score Services:** Credit Karma, CIBIL, Experian apps
- **Credit Monitoring:** Set up alerts for changes
- **Budgeting Apps:** Track spending and payments
- **Automatic Payments:** Ensure you never miss due dates

**The Bottom Line**

Building excellent credit takes time and discipline, but the financial benefits are enormous. A great credit score can save you hundreds of thousands of rupees over your lifetime through better interest rates and terms.

Start today, be consistent, and remember that every financial decision impacts your credit score. Treat your credit score as one of your most valuable financial assets—because that's exactly what it is.

The habits that build great credit (paying on time, living below your means, monitoring your finances) are the same habits that build wealth. Focus on both, and you'll set yourself up for long-term financial success.
    `,
        icon: CreditCard,
        color: 'bg-teal-500'
    }
]

export default function FinancialEducationPage() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedArticle, setSelectedArticle] = useState<number | null>(null)

    const filteredArticles = selectedCategory === 'all'
        ? articles
        : articles.filter(article => article.category === selectedCategory)

    if (selectedArticle) {
        const article = articles.find(a => a.id === selectedArticle)
        if (!article) return null

        return (
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => setSelectedArticle(null)}
                        className="mb-8 flex items-center text-primary-600 hover:text-primary-700 font-medium"
                    >
                        ← Back to Articles
                    </motion.button>

                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="card"
                    >
                        <div className="flex items-center mb-6">
                            <div className={`${article.color} p-3 rounded-lg mr-4`}>
                                <article.icon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                    <span className="flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {article.readTime}
                                    </span>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                            article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                        }`}>
                                        {article.difficulty}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="prose max-w-none">
                            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                                {article.content}
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-primary-50 rounded-lg">
                            <h3 className="font-semibold text-primary-900 mb-2">💡 Key Takeaway</h3>
                            <p className="text-primary-800">{article.excerpt}</p>
                        </div>
                    </motion.article>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center mb-4">
                        <BookOpen className="h-12 w-12 text-primary-600 mr-3" />
                        <h1 className="text-4xl font-bold text-gray-900">Financial Education Center</h1>
                    </div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Master your finances with our comprehensive guides on savings, investments, budgeting, and more.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center mb-12 gap-4">
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center px-6 py-3 rounded-full font-medium transition-colors ${selectedCategory === category.id
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-white text-gray-600 hover:text-primary-600 hover:bg-primary-50 border border-gray-200'
                                }`}
                        >
                            <category.icon className="h-5 w-5 mr-2" />
                            {category.label}
                        </motion.button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="card hover:shadow-lg transition-shadow cursor-pointer group"
                            onClick={() => setSelectedArticle(article.id)}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`${article.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                                    <article.icon className="h-6 w-6 text-white" />
                                </div>
                                <div className="text-right">
                                    <div className="flex items-center text-sm text-gray-500 mb-1">
                                        <Clock className="h-4 w-4 mr-1" />
                                        {article.readTime}
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${article.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                                            article.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                                'bg-red-100 text-red-800'
                                        }`}>
                                        {article.difficulty}
                                    </span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                                {article.title}
                            </h3>

                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {article.excerpt}
                            </p>

                            <div className="text-primary-600 font-medium group-hover:text-primary-700">
                                Read Article →
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredArticles.length === 0 && (
                    <div className="text-center py-12">
                        <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-500">No articles found in this category.</p>
                    </div>
                )}

                {/* Newsletter Signup */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 card bg-gradient-to-r from-primary-600 to-blue-600 text-white"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
                        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                            Get the latest financial tips, market insights, and educational content delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                            />
                            <button className="bg-yellow-400 text-primary-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-blue-200 mt-4">
                            No spam, unsubscribe anytime. We respect your privacy.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
