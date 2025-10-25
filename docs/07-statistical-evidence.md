---
layout: default
---

# Statistical Evidence & Reporting

## Overview

This guide provides a comprehensive reference for **what statistical evidence to report** when validating scales and **how to interpret** the results. Use this as a checklist when writing manuscripts or evaluating published scales.

---

## Complete Reporting Checklist

### ✅ Factor Analysis Results

#### Exploratory Factor Analysis (EFA)

**Report these statistics:**

| Statistic | What It Shows | Standards |
|-----------|---------------|-----------|
| **KMO** | Sampling adequacy | > 0.80 good, > 0.90 excellent |
| **Bartlett's Test** | Variables are correlated | p < 0.05 (significant) |
| **Eigenvalues** | Variance explained per factor | > 1.0 (Kaiser criterion) |
| **% Variance Explained** | Total variance captured | 50-60%+ desirable |
| **Factor Loadings** | Item-factor correlations | > 0.50 good, > 0.40 acceptable |
| **Cross-loadings** | Item loads on multiple factors | < 0.30 on other factors |
| **Communalities** | Variance item shares with factors | > 0.40 |

**Also report:**
- Extraction method (e.g., Principal Axis Factoring, Maximum Likelihood)
- Rotation method (e.g., Promax, Varimax)
- Sample size (N)
- Number of factors retained and rationale
- Items deleted and why

**Example text:**
> "The Kaiser-Meyer-Olkin measure verified sampling adequacy (KMO = .87).
> Bartlett's test of sphericity indicated correlations were appropriate for
> factor analysis, χ²(190) = 2847.3, p < .001. Principal axis factoring with
> promax rotation revealed three factors with eigenvalues > 1, explaining
> 58.3% of variance. All items loaded > .50 on their intended factor with no
> cross-loadings > .30 (see Table 1)."

#### Confirmatory Factor Analysis (CFA)

**Report these fit indices:**

| Index | Full Name | Good Fit | Acceptable Fit |
|-------|-----------|----------|----------------|
| **χ²** | Chi-square | p > .05 | Often significant with n > 200 |
| **CFI** | Comparative Fit Index | ≥ .95 | .90-.95 |
| **TLI** | Tucker-Lewis Index | ≥ .95 | .90-.95 |
| **RMSEA** | Root Mean Square Error | < .06 | .06-.08 |
| **SRMR** | Standardized Root Mean Square Residual | < .08 | .08-.10 |
| **χ²/df** | Normed chi-square | < 3 | < 5 |

**Also report:**
- Sample size (N)
- Estimation method (e.g., Maximum Likelihood)
- Standardized factor loadings (λ)
- Factor correlations (for oblique models)
- Modification indices (if model revised)
- Model comparisons (if testing alternatives)

**Example text:**
> "Confirmatory factor analysis (N = 387) using maximum likelihood estimation
> supported the three-factor structure. Model fit was good: χ²(116) = 189.3,
> p < .001, CFI = .96, TLI = .95, RMSEA = .048 [90% CI: .037, .059],
> SRMR = .052. All standardized loadings were significant (p < .001) and
> ranged from .58 to .87 (see Table 2). The three factors were moderately
> correlated (r = .34-.52)."

### Model Comparison Table Example

| Model | χ² | df | CFI | TLI | RMSEA | SRMR | Comparison |
|-------|-------|-----|-----|-----|-------|------|------------|
| 1-factor | 456.2 | 119 | .84 | .82 | .096 | .089 | - |
| 3-factor (uncorrelated) | 298.7 | 119 | .91 | .90 | .071 | .075 | Δχ²(0) = 157.5*** |
| 3-factor (correlated) | 189.3 | 116 | .96 | .95 | .048 | .052 | Δχ²(3) = 109.4*** |

**Note:** *** p < .001

---

### ✅ Reliability Statistics

**Report for each scale/subscale:**

| Statistic | What It Shows | Standards |
|-----------|---------------|-----------|
| **Cronbach's α** | Internal consistency | ≥ .70 acceptable, ≥ .80 good |
| **McDonald's ω** | Alternative internal consistency | ≥ .70 acceptable |
| **Composite Reliability (CR)** | CFA-based reliability | ≥ .70 acceptable, ≥ .80 good |
| **AVE** | Average Variance Extracted | ≥ .50 |
| **Test-retest r** | Stability over time | ≥ .70 good |
| **ICC** | Intraclass correlation | ≥ .75 good |

**Also report:**
- Number of items
- Sample size
- Time interval (for test-retest)
- Mean inter-item correlation (optional)
- Range of item-total correlations

**Example text:**
> "All subscales demonstrated good internal consistency: Work Satisfaction
> (α = .87, 5 items), Pay Satisfaction (α = .83, 4 items), and Supervisor
> Satisfaction (α = .89, 6 items). Composite reliabilities from CFA were
> similar (CR = .88, .84, .90, respectively). Test-retest reliability over
> two weeks was strong (r = .82, n = 78)."

**Reliability Table Example:**

| Scale | Items | α | ω | CR | AVE | M | SD |
|-------|-------|---|---|----|----|---|-----|
| Job Satisfaction (total) | 15 | .91 | .92 | .92 | .48 | 3.67 | 0.89 |
| Work Itself | 5 | .87 | .88 | .88 | .59 | 3.82 | 0.95 |
| Pay & Benefits | 4 | .83 | .84 | .84 | .57 | 3.24 | 1.12 |
| Supervision | 6 | .89 | .90 | .90 | .60 | 3.94 | 0.98 |

---

### ✅ Validity Evidence

#### Content Validity

**Report:**
- [ ] Construct definition and theoretical basis
- [ ] Item development process (sources)
- [ ] Number of initial items generated
- [ ] Expert panel composition (n, qualifications)
- [ ] Content validity indices (CVR, I-CVI, S-CVI)
- [ ] Item revisions based on feedback
- [ ] Cognitive interview results (if conducted)

**Example text:**
> "Content validity was established through expert review. Seven subject
> matter experts (4 academics, 3 practitioners) rated each item's relevance
> and clarity. The scale-level CVI was .94. Items with I-CVI < .78 were
> revised or removed, reducing the pool from 48 to 35 items. Cognitive
> interviews with 8 employees confirmed item clarity."

#### Convergent Validity

**Report:**
- [ ] Measures used and their psychometric properties
- [ ] Correlations with your scale
- [ ] Sample size
- [ ] AVE > .50 (from CFA)
- [ ] Theoretical rationale for relationships

**Correlation Table Example:**

| Measure | α | r with Our Scale | p |
|---------|---|------------------|---|
| Established Job Satisfaction Scale | .88 | .67 | < .001 |
| Organizational Commitment | .84 | .52 | < .001 |
| Work Engagement | .91 | .58 | < .001 |
| Positive Affect at Work | .86 | .44 | < .001 |

**Example text:**
> "Convergent validity was supported by significant correlations with
> theoretically related constructs (Table 3). Our scale correlated strongly
> with an established job satisfaction measure (r = .67, p < .001) and
> moderately with organizational commitment (r = .52, p < .001) and work
> engagement (r = .58, p < .001), as expected."

#### Discriminant Validity

**Report:**
- [ ] Measures used
- [ ] Correlations (should be low)
- [ ] Fornell-Larcker criterion (√AVE > correlations)
- [ ] HTMT ratios (< .85)
- [ ] Comparison to convergent validity correlations

**Example table:**

| Construct | 1 | 2 | 3 | 4 | 5 |
|-----------|---|---|---|---|---|
| 1. Job Satisfaction | (.77) | | | | |
| 2. Org. Commitment | .52 | (.81) | | | |
| 3. Extraversion | .18 | .12 | (.84) | | |
| 4. Neuroticism | -.24 | -.19 | -.15 | (.88) | |
| 5. Cognitive Ability | .09 | .11 | .08 | -.06 | (.92) |

**Note:** Diagonal (in parentheses) = √AVE

**Example text:**
> "Discriminant validity was demonstrated by low correlations with unrelated
> constructs. Job satisfaction showed negligible correlations with cognitive
> ability (r = .09, ns) and low correlations with personality traits
> (r = -.24 to .18). The Fornell-Larcker criterion was met: √AVE (.77)
> exceeded all inter-construct correlations. HTMT ratios were all < .30
> for unrelated constructs."

#### Criterion Validity

**Report for concurrent validity:**
- [ ] Criterion measure(s) and psychometrics
- [ ] Correlations or regression coefficients
- [ ] Effect sizes
- [ ] Sample size

**Report for predictive validity:**
- [ ] All above PLUS:
- [ ] Time lag between measurements
- [ ] Retention rate / attrition analysis
- [ ] Control variables (if any)

**Example text:**
> "Criterion validity was examined concurrently and predictively. Job
> satisfaction correlated significantly with supervisor-rated performance
> (r = .34, p < .001, N = 284) and negatively with objective absenteeism
> (r = -.28, p < .001). In a 1-year longitudinal study (N = 156, 82% retention),
> Time 1 satisfaction significantly predicted Time 2 turnover intentions
> (β = -.42, p < .001) and actual turnover (OR = 0.45, 95% CI [0.28, 0.72],
> p < .01), controlling for baseline intentions."

---

## Effect Size Interpretation

### Correlation Coefficients (r)

| r | Cohen's d | % Variance | Interpretation |
|---|-----------|------------|----------------|
| .10 | 0.20 | 1% | Small effect |
| .30 | 0.63 | 9% | Medium effect |
| .50 | 1.15 | 25% | Large effect |
| .70 | 1.96 | 49% | Very large effect |

**Context matters:**
- r = .20-.30 can be meaningful in applied contexts
- r > .70 in validation may indicate redundancy
- Compare to benchmarks in your literature

### Regression (R² and ΔR²)

| R² or ΔR² | Interpretation |
|-----------|----------------|
| .01-.04 | Small |
| .05-.10 | Medium |
| .11-.25 | Large |
| > .25 | Very large |

### Cohen's d (Group Differences)

| d | Interpretation |
|---|----------------|
| 0.20 | Small |
| 0.50 | Medium |
| 0.80 | Large |

---

## Descriptive Statistics Table

Always include a table with:

**Scale-level descriptives:**

| Scale | Items | M | SD | Range | α | 1 | 2 | 3 |
|-------|-------|---|-------|-------|---|---|---|---|
| 1. Job Satisfaction | 15 | 3.67 | 0.89 | 1-5 | .91 | - | | |
| 2. Org. Commitment | 8 | 3.45 | 0.95 | 1-5 | .88 | .52** | - | |
| 3. Turnover Intent | 3 | 2.84 | 1.12 | 1-5 | .85 | -.58** | -.47** | - |

**Note:** ** p < .01

**Item-level descriptives (supplemental table):**

| Item | M | SD | Skew | Kurtosis | Item-Total r |
|------|---|-------|------|----------|-------------|
| 1. I find my work meaningful | 3.82 | 1.05 | -0.45 | -0.32 | .67 |
| 2. I enjoy my daily tasks | 3.67 | 0.98 | -0.38 | -0.18 | .71 |
| [etc.] | | | | | |

---

## Sample Characteristics

Always report:

**Participant demographics:**

| Variable | Category | n | % |
|----------|----------|---|---|
| Gender | Female | 182 | 58.7 |
| | Male | 127 | 41.0 |
| | Non-binary | 1 | 0.3 |
| Age | 18-25 | 45 | 14.5 |
| | 26-35 | 128 | 41.3 |
| | 36-45 | 89 | 28.7 |
| | 46+ | 48 | 15.5 |
| Education | High school | 34 | 11.0 |
| | Some college | 87 | 28.1 |
| | Bachelor's | 142 | 45.8 |
| | Graduate | 47 | 15.1 |

**Recruitment and procedures:**
- [ ] Recruitment method (e.g., MTurk, organizational sample)
- [ ] Response rate
- [ ] Incentives provided
- [ ] Attention checks / data quality procedures
- [ ] Exclusions and reasons

**Example text:**
> "Participants (N = 310) were recruited through Prolific. After excluding
> 12 respondents who failed attention checks, the final sample comprised
> 298 employees (58.7% female; Mage = 34.2, SD = 9.8). Most held bachelor's
> degrees (45.8%) and worked full-time (89.6%). Participants received $3
> compensation for the 15-minute survey."

---

## Missing Data & Assumptions

**Report:**
- [ ] Amount of missing data (per variable)
- [ ] Missing data patterns (MCAR, MAR, MNAR)
- [ ] How missing data were handled
- [ ] Tests of statistical assumptions

**Example text:**
> "Missing data were minimal (< 2% per variable) and appeared missing
> completely at random (Little's MCAR test: χ² = 134.5, df = 142, p = .66).
> Listwise deletion was used. Univariate normality was acceptable (skewness
> < |2|, kurtosis < |7|). Multivariate normality was assessed via Mardia's
> coefficient."

---

## Common Reporting Mistakes

### ❌ Mistake 1: Reporting Only Cronbach's Alpha
**Problem:** Insufficient for validity
**Fix:** Report multiple types of evidence (validity + reliability)

### ❌ Mistake 2: No Sample Characteristics
**Problem:** Can't assess generalizability
**Fix:** Always include demographic table

### ❌ Mistake 3: Only Reporting "Good Fit"
**Problem:** Cherry-picking indices
**Fix:** Report full set of fit indices (CFI, TLI, RMSEA, SRMR)

### ❌ Mistake 4: Vague Validity Claims
**Problem:** "The scale was valid" without evidence
**Fix:** Provide specific correlations and tests

### ❌ Mistake 5: Not Reporting Modifications
**Problem:** Appears results-driven
**Fix:** Transparently report all model modifications and rationale

### ❌ Mistake 6: Ignoring Non-Significant Results
**Problem:** Publication bias
**Fix:** Report all tests conducted, even if ns

### ❌ Mistake 7: No Effect Sizes
**Problem:** Can't assess practical significance
**Fix:** Always report effect sizes (r, d, R²)

---

## APA Style Reporting Examples

### Reporting Factor Analysis

> "To assess factorial validity, we conducted exploratory factor analysis
> (EFA) with Sample 1 (N = 342) and confirmatory factor analysis (CFA) with
> Sample 2 (N = 387). EFA using principal axis factoring with promax rotation
> revealed three factors (eigenvalues = 5.34, 2.18, 1.47) explaining 58.3%
> of variance. The KMO measure (.87) and Bartlett's test (χ² = 2847.3, p < .001)
> indicated adequacy. All items loaded > .50 on their intended factor
> (range: .54-.84) with no cross-loadings > .30.
>
> CFA with Sample 2 confirmed the three-factor structure. Model fit was good:
> χ²(116) = 189.3, p < .001, CFI = .96, TLI = .95, RMSEA = .048 [90% CI: .037, .059],
> SRMR = .052. This model fit significantly better than a one-factor model
> (Δχ² = 267.1, Δdf = 3, p < .001)."

### Reporting Reliability

> "All scales demonstrated good to excellent internal consistency (see Table 1).
> Cronbach's alphas ranged from .83 to .91. Composite reliabilities from CFA
> were similar (CR = .84-.92). Average variance extracted exceeded .50 for
> all factors, supporting convergent validity. Test-retest reliability over
> a 2-week interval was strong for the total scale (r = .82, ICC = .81,
> n = 78, p < .001)."

### Reporting Validity

> "Convergent and discriminant validity were assessed via correlations with
> established measures (Table 2). Job satisfaction correlated positively with
> organizational commitment (r = .52, p < .001) and work engagement (r = .58,
> p < .001), supporting convergent validity. Discriminant validity was
> demonstrated by low correlations with personality traits (r = -.24 to .18)
> and cognitive ability (r = .09, ns). All Fornell-Larcker criteria were met,
> and HTMT ratios confirmed discriminant validity (all < .85)."

---

## Checklist for Publication

Before submitting, ensure you've reported:

**Method Section:**
- [ ] Sample characteristics (demographics, recruitment)
- [ ] Sample size and power justification
- [ ] Measures (including response format, sample items, psychometrics)
- [ ] Procedure (data collection, IRB approval)

**Results Section - Descriptive:**
- [ ] Means, SDs, ranges for all scales
- [ ] Correlation table
- [ ] Missing data information
- [ ] Assumption tests

**Results Section - EFA:**
- [ ] KMO and Bartlett's test
- [ ] Extraction and rotation methods
- [ ] Number of factors and variance explained
- [ ] Factor loadings table
- [ ] Items deleted and rationale

**Results Section - CFA:**
- [ ] Full set of fit indices (χ², CFI, TLI, RMSEA, SRMR)
- [ ] Standardized loadings
- [ ] Model comparisons (if applicable)
- [ ] Modifications (if any) with justification

**Results Section - Reliability:**
- [ ] Cronbach's α for each scale/subscale
- [ ] CR and AVE (from CFA)
- [ ] Test-retest (if conducted)

**Results Section - Validity:**
- [ ] Convergent validity (correlations with related measures)
- [ ] Discriminant validity (correlations with unrelated measures, HTMT)
- [ ] Criterion validity (concurrent and/or predictive)
- [ ] Nomological validity (theoretical relationships)

**Discussion Section:**
- [ ] Interpretation of findings
- [ ] Comparison to existing measures
- [ ] Limitations
- [ ] Future directions
- [ ] Practical implications

---

## Next Steps

**→ See real examples:** [Real-World Examples](08-examples.md)

**→ Review best practices:** [Best Practices & Guidelines](09-best-practices.md)

**→ Check terms:** [Glossary](glossary.md)

---

**Related Resources:**
- [APA Style Guide](https://apastyle.apa.org/)
- [Resources: Reporting Templates](resources.md#templates)
