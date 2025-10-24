# Resources & References

## Overview

This document provides a curated list of **resources for scale development and validation**, including databases, software, readings, and practical tools.

---

## Scale Databases & Repositories

### Comprehensive Databases

**PsycTESTS (APA)**
- **What:** 20,000+ psychological tests and measures
- **Access:** Institutional subscription required
- **URL:** https://www.apa.org/pubs/databases/psyctests
- **Best for:** Finding validated scales across all psychology domains

**Mental Measurements Yearbook (MMY)**
- **What:** Critical reviews of published tests
- **Access:** Institutional subscription or purchase
- **URL:** https://buros.org/mental-measurements-yearbook
- **Best for:** Expert evaluations of test quality

**Health and Psychosocial Instruments (HaPI)**
- **What:** 15,000+ health and psychosocial measures
- **Access:** Institutional subscription
- **Best for:** Health, nursing, and clinical research

**ETS Test Collection Database**
- **What:** 25,000+ tests and research instruments
- **Access:** Free
- **URL:** https://www.ets.org/test-link/about
- **Best for:** Educational and aptitude measures

### Domain-Specific Repositories

**PROMIS (Patient-Reported Outcomes Measurement Information System)**
- **Domain:** Health outcomes
- **Access:** Free
- **URL:** https://www.healthmeasures.net/explore-measurement-systems/promis
- **Best for:** Patient-reported health outcomes

**SIOP (Society for Industrial-Organizational Psychology)**
- **Domain:** Organizational psychology
- **URL:** https://www.siop.org
- **Best for:** Workplace attitudes, behaviors, and outcomes

**NIMH Research Domain Criteria (RDoC)**
- **Domain:** Mental health
- **Access:** Free
- **URL:** https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc
- **Best for:** Mental health and psychopathology measures

**COSMIN Database**
- **Domain:** Health measurement properties
- **Access:** Free
- **URL:** https://database.cosmin.nl
- **Best for:** Evaluating measurement properties of health scales

---

## Statistical Software

### For Factor Analysis (EFA/CFA)

**R (Free & Open Source)**
- **Packages:**
  - `psych` - EFA, reliability, descriptive stats
  - `lavaan` - CFA, SEM
  - `semTools` - Measurement invariance, advanced SEM
  - `MBESS` - Confidence intervals, omega
- **Pros:** Free, flexible, reproducible
- **Cons:** Learning curve
- **URL:** https://www.r-project.org
- **Tutorials:**
  - https://lavaan.ugent.be/tutorial/
  - https://personality-project.org/r/psych/

**Mplus**
- **What:** Specialized SEM software
- **Cost:** $800-$1,500 (student discounts available)
- **Pros:** User-friendly, excellent for complex models, comprehensive output
- **Cons:** Expensive, proprietary
- **URL:** https://www.statmodel.com
- **Best for:** CFA, measurement invariance, complex SEM

**SPSS (with AMOS)**
- **What:** General statistical software with SEM add-on
- **Cost:** Subscription-based (~$99/month)
- **Pros:** User-friendly interface, widely known
- **Cons:** Expensive, less flexible than R
- **URL:** https://www.ibm.com/spss
- **Best for:** Researchers familiar with SPSS

**jamovi (Free)**
- **What:** User-friendly alternative to SPSS
- **Cost:** Free
- **Pros:** Point-and-click interface, R-based
- **Cons:** Limited compared to R or Mplus
- **URL:** https://www.jamovi.org
- **Best for:** Beginners, basic analyses

**JASP (Free)**
- **What:** Statistical software with Bayesian capabilities
- **Cost:** Free
- **Pros:** User-friendly, Bayesian and frequentist methods
- **URL:** https://jasp-stats.org
- **Best for:** Researchers wanting both classical and Bayesian approaches

### For Data Collection

**Qualtrics**
- **Cost:** Institutional license or ~$1,500/year
- **Pros:** Professional, many features, good support
- **URL:** https://www.qualtrics.com

**SurveyMonkey**
- **Cost:** Free basic, $25-99/month for advanced
- **Pros:** Easy to use, widely known
- **URL:** https://www.surveymonkey.com

**REDCap**
- **Cost:** Free (institutional partnership required)
- **Pros:** Secure, HIPAA-compliant, excellent for longitudinal studies
- **URL:** https://www.project-redcap.org
- **Best for:** Clinical and health research

**Google Forms**
- **Cost:** Free
- **Pros:** Free, simple, integrates with Google Sheets
- **Cons:** Limited features, less professional
- **Best for:** Pilot testing, simple surveys

### For Participant Recruitment

**Prolific**
- **What:** Online participant recruitment
- **Cost:** ~$6-8 per participant (depending on length)
- **Pros:** High-quality participants, good for academic research
- **URL:** https://www.prolific.co

**Amazon MTurk**
- **What:** Crowdsourcing platform
- **Cost:** ~$1-3 per participant + 20-40% platform fee
- **Pros:** Fast recruitment, large pool
- **Cons:** Quality concerns, attention checks needed
- **URL:** https://www.mturk.com

**CloudResearch (formerly TurkPrime)**
- **What:** MTurk enhancement platform
- **Cost:** Varies
- **Pros:** Better quality control than MTurk alone
- **URL:** https://www.cloudresearch.com

---

## Sample Size Calculators & Tools

**G*Power**
- **What:** Power analysis and sample size calculator
- **Cost:** Free
- **URL:** https://www.psychologie.hhu.de/arbeitsgruppen/allgemeine-psychologie-und-arbeitspsychologie/gpower
- **Use:** Determine sample size for various statistical tests

**WebPower (R package)**
- **What:** Power analysis for complex designs
- **Cost:** Free
- **URL:** https://webpower.psychstat.org

**Sample Size for CFA/SEM Rule of Thumb:**
- Minimum: 200
- 5-10 participants per item
- More complex models need larger samples

---

## Key Textbooks & Readings

### Scale Development Guides

**DeVellis, R. F. (2017). *Scale Development: Theory and Applications* (4th ed.). Sage.**
- **Best for:** Comprehensive, step-by-step guide
- **Level:** Intermediate
- **Focus:** Practical scale development

**Furr, R. M., & Bacharach, V. R. (2014). *Psychometrics: An Introduction* (2nd ed.). Sage.**
- **Best for:** Foundations of measurement theory
- **Level:** Beginner to intermediate
- **Focus:** Conceptual understanding

**Netemeyer, R. G., Bearden, W. O., & Sharma, S. (2003). *Scaling Procedures: Issues and Applications*. Sage.**
- **Best for:** Multi-item scales in marketing and social sciences
- **Level:** Intermediate to advanced

### Factor Analysis & SEM

**Brown, T. A. (2015). *Confirmatory Factor Analysis for Applied Research* (2nd ed.). Guilford.**
- **Best for:** CFA in practice
- **Level:** Intermediate to advanced
- **Software:** Examples in Mplus and R

**Kline, R. B. (2016). *Principles and Practice of Structural Equation Modeling* (4th ed.). Guilford.**
- **Best for:** Comprehensive SEM guide
- **Level:** Advanced
- **Focus:** Theory and application

**Tabachnick, B. G., & Fidell, L. S. (2019). *Using Multivariate Statistics* (7th ed.). Pearson.**
- **Best for:** Comprehensive reference for multivariate methods
- **Level:** Intermediate
- **Software:** SPSS and SAS examples

### Reliability & Validity

**Crocker, L., & Algina, J. (2008). *Introduction to Classical and Modern Test Theory*. Cengage.**
- **Best for:** Test theory foundations
- **Level:** Advanced
- **Focus:** Theoretical grounding

---

## Essential Journal Articles

### Scale Development Methodologies

**Clark, L. A., & Watson, D. (1995).** Constructing validity: Basic issues in objective scale development. *Psychological Assessment, 7*(3), 309-319.
- **Why read:** Classic guide to scale development steps

**Hinkin, T. R. (1998).** A brief tutorial on the development of measures for use in survey questionnaires. *Organizational Research Methods, 1*(1), 104-121.
- **Why read:** Concise, practical guide for organizational research

**Carpenter, S. (2018).** Ten steps in scale development and reporting: A guide for researchers. *Communication Methods and Measures, 12*(1), 25-44.
- **Why read:** Modern, comprehensive checklist

**Boateng, G. O., et al. (2018).** Best practices for developing and validating scales for health, social, and behavioral research: A primer. *Frontiers in Public Health, 6*, 149.
- **Why read:** Up-to-date best practices across disciplines

### Factor Analysis

**Worthington, R. L., & Whittaker, T. A. (2006).** Scale development research: A content analysis and recommendations for best practices. *The Counseling Psychologist, 34*(6), 806-838.
- **Why read:** Analysis of what researchers actually do vs. best practices

**Fabrigar, L. R., et al. (1999).** Evaluating the use of exploratory factor analysis in psychological research. *Psychological Methods, 4*(3), 272-299.
- **Why read:** Technical guide to EFA decisions

**Hu, L., & Bentler, P. M. (1999).** Cutoff criteria for fit indexes in covariance structure analysis: Conventional criteria versus new alternatives. *Structural Equation Modeling, 6*(1), 1-55.
- **Why read:** Basis for CFA fit index cutoffs (CFI, RMSEA, etc.)

### Reliability

**Cronbach, L. J. (1951).** Coefficient alpha and the internal structure of tests. *Psychometrika, 16*(3), 297-334.
- **Why read:** Original alpha article (historical)

**Revelle, W., & Zinbarg, R. E. (2009).** Coefficients alpha, beta, omega, and the glb: Comments on Sijtsma. *Psychometrika, 74*(1), 145-154.
- **Why read:** Why omega is often better than alpha

**McNeish, D. (2018).** Thanks coefficient alpha, we'll take it from here. *Psychological Methods, 23*(3), 412-433.
- **Why read:** Limitations of alpha, alternatives

### Validity

**Cronbach, L. J., & Meehl, P. E. (1955).** Construct validity in psychological tests. *Psychological Bulletin, 52*(4), 281-302.
- **Why read:** Classic article on construct validity (historical)

**Messick, S. (1995).** Validity of psychological assessment: Validation of inferences from persons' responses and performances as scientific inquiry into score meaning. *American Psychologist, 50*(9), 741-749.
- **Why read:** Modern unified concept of validity

---

## Online Tutorials & Courses

### R and Statistics

**DataCamp - Statistics with R Track**
- **URL:** https://www.datacamp.com
- **Cost:** Subscription (~$25/month)
- **Level:** Beginner to intermediate

**Statistics.com - Factor Analysis & SEM Courses**
- **URL:** https://www.statistics.com
- **Cost:** ~$500 per course
- **Level:** Intermediate to advanced

### YouTube Channels

**StatQuest with Josh Starmer**
- **Focus:** Statistical concepts explained simply
- **URL:** https://www.youtube.com/c/joshstarmer

**Mike Crowson**
- **Focus:** Factor analysis, SEM tutorials
- **URL:** Search "Mike Crowson CFA" on YouTube

---

## Professional Organizations

**APA (American Psychological Association)**
- **URL:** https://www.apa.org
- **Journals:** *Psychological Assessment*, *Psychological Methods*

**AERA (American Educational Research Association)**
- **URL:** https://www.aera.net
- **Standards:** *Standards for Educational and Psychological Testing*

**NCME (National Council on Measurement in Education)**
- **URL:** https://www.ncme.org
- **Focus:** Educational measurement

**SIOP (Society for Industrial-Organizational Psychology)**
- **URL:** https://www.siop.org
- **Focus:** Workplace assessment

---

## Reporting Standards & Guidelines

**AERA, APA, & NCME (2014). *Standards for Educational and Psychological Testing***
- **What:** Official standards for test development
- **URL:** Available through APA
- **Use:** Reference for professional standards

**COSMIN Guidelines**
- **What:** Standards for health measurement properties
- **URL:** https://www.cosmin.nl
- **Use:** Health and clinical research

**STROBE Statement (Strengthening the Reporting of Observational Studies)**
- **URL:** https://www.strobe-statement.org
- **Use:** Reporting observational research

---

## Item Writing Resources

### Guidelines

**Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). *Internet, Phone, Mail, and Mixed-Mode Surveys: The Tailored Design Method* (4th ed.). Wiley.**
- Survey design and item writing best practices

**Tourangeau, R., Rips, L. J., & Rasinski, K. (2000). *The Psychology of Survey Response*. Cambridge.**
- How respondents interpret and answer questions

### Cognitive Interviewing

**Willis, G. B. (2005). *Cognitive Interviewing: A Tool for Improving Questionnaire Design*. Sage.**
- How to conduct cognitive interviews to test items

---

## Effect Size Benchmarks

**Cohen, J. (1988). *Statistical Power Analysis for the Behavioral Sciences* (2nd ed.). Routledge.**
- Source of "small/medium/large" effect size conventions

**Correlation benchmarks:**
- Small: r = .10
- Medium: r = .30
- Large: r = .50

**Note:** Context-specific benchmarks often more appropriate than Cohen's generic rules.

---

## Preregistration Platforms

**Open Science Framework (OSF)**
- **URL:** https://osf.io
- **Cost:** Free
- **Use:** Preregister validation plans, share materials

**AsPredicted**
- **URL:** https://aspredicted.org
- **Cost:** Free
- **Use:** Simple preregistration

---

## Templates & Checklists

### Validation Study Template

Available in this repository:
- See [Validation Timeline & Process](06-validation-timeline.md) for planning template

### Reporting Checklist

Available in this repository:
- See [Statistical Evidence & Reporting](07-statistical-evidence.md) for publication checklist

---

## Copyright & Permission

### When You Need Permission

**You need permission to:**
- Reproduce entire copyrighted scales
- Modify copyrighted scales
- Use scales commercially

**You typically DON'T need permission to:**
- Cite scale items as examples in academic papers
- Use scales in research if freely available
- Create new scales inspired by existing frameworks

### How to Obtain Permission

1. Identify copyright holder (usually publisher or author)
2. Contact via email with:
   - Your intended use
   - Context (research, clinical, commercial)
   - Number of participants
3. Allow 2-4 weeks for response
4. Some publishers charge fees for use

### Open-Access Scales

Many scales are freely available for research use. Check:
- Original publication (often in appendix)
- Author's website
- PsycTESTS (may include full scale if open)

---

## Additional Resources by Domain

### Organizational/I-O Psychology
- SIOP test resources
- *Journal of Applied Psychology*
- *Organizational Research Methods*

### Clinical Psychology
- APA Division 12 (Clinical) resources
- *Assessment* journal
- *Psychological Assessment* journal

### Health Research
- PROMIS measures
- NIH Toolbox
- COSMIN database

### Education
- ETS Test Collection
- *Educational and Psychological Measurement* journal
- AERA Standards

---

## Staying Current

**Journals to Follow:**
- *Psychological Methods*
- *Organizational Research Methods*
- *Structural Equation Modeling*
- *Multivariate Behavioral Research*
- *Assessment*
- *Psychological Assessment*

**Google Scholar Alerts:**
- Set alerts for "[your construct] scale validation"
- Track citations of key papers

**Twitter/X:**
- Follow psychometricians and methodologists
- Hashtag: #psychometrics, #measurement

---

## Questions & Support

### Where to Ask Questions

**CrossValidated (StackExchange)**
- **URL:** https://stats.stackexchange.com
- **Best for:** Statistical analysis questions

**Research Gate**
- **URL:** https://www.researchgate.net
- **Best for:** Connecting with researchers, methodological questions

**SEMNET Listserv**
- **URL:** https://www.semnet.org
- **Best for:** SEM-specific questions

---

## Contributing to This Resource

Found a useful resource not listed here? Please contribute:
- Open an issue on the repository
- Submit a pull request with additions
- Email suggestions to repository maintainer

---

**Last Updated:** October 2025

**Note:** URLs and availability may change. If you find broken links, please report them.
