---
layout: default
---

# Reliability Testing

## Overview

**Reliability** addresses the fundamental question: **"Does the scale give consistent results?"**

A reliable measure produces stable, consistent scores across:
- **Items** within the scale (internal consistency)
- **Time** points (test-retest reliability)
- **Raters** or observers (inter-rater reliability)

**Key principle:** A measure cannot be valid if it is not reliable. Reliability is necessary (but not sufficient) for validity.

---

## Why Reliability Matters

### The Problem with Unreliable Measures

Unreliable measures introduce **measurement error**, which:
- ❌ Reduces statistical power (harder to detect real effects)
- ❌ Attenuates correlations (makes relationships appear weaker)
- ❌ Produces inconsistent findings across studies
- ❌ Undermines validity evidence
- ❌ Leads to incorrect conclusions

### Classical Test Theory

Your observed score (X) consists of:
```
X = T + E

Where:
X = Observed score
T = True score (what we want to measure)
E = Error (random fluctuations)
```

**Reliability** = proportion of variance in observed scores due to true score variance

```
Reliability = Var(T) / Var(X)
           = Var(T) / [Var(T) + Var(E)]
```

**Perfect reliability** = 1.0 (no error)
**Zero reliability** = 0.0 (all error)

---

## Types of Reliability

Different types assess different sources of consistency:

| Type | What It Assesses | When Used |
|------|------------------|-----------|
| **Internal Consistency** | Do items measure the same thing? | Always (minimum requirement) |
| **Test-Retest** | Stability over time | For stable traits/states |
| **Inter-Rater** | Agreement between raters | For observational measures |
| **Parallel Forms** | Equivalence of different versions | For alternate test forms |

---

## 1. Internal Consistency Reliability

### What is Internal Consistency?

**Definition:** The extent to which items within a scale correlate with each other and measure the same underlying construct.

**Logic:** If all items measure the same thing, they should correlate positively.

### Cronbach's Alpha (α)

**Most commonly reported reliability coefficient**

#### Formula (Conceptual):
```
α = (k / k-1) × [1 - (Σσ²ᵢ / σ²ₜ)]

Where:
k = number of items
σ²ᵢ = variance of item i
σ²ₜ = total scale variance
```

#### Interpretation Standards:

| Cronbach's α | Interpretation | Action |
|--------------|----------------|--------|
| α ≥ 0.90 | Excellent | May indicate redundancy |
| α = 0.80-0.89 | Good | Acceptable for most research |
| α = 0.70-0.79 | Acceptable | Minimum for research |
| α = 0.60-0.69 | Questionable | Consider revision |
| α < 0.60 | Unacceptable | Do not use |

**Context matters:**
- **Early stage research**: α ≥ 0.70 acceptable
- **Published research**: α ≥ 0.80 preferred
- **Clinical decisions**: α ≥ 0.90 required
- **Broad constructs**: Lower α acceptable (0.65-0.70)
- **Narrow constructs**: Higher α expected (> 0.80)

### What Affects Cronbach's Alpha?

#### Factor 1: Number of Items
**More items → Higher α** (holding item quality constant)

**Example:**
- 5 items, average r = 0.40 → α ≈ 0.71
- 10 items, average r = 0.40 → α ≈ 0.83

**Implication:** Can inflate α by adding redundant items (not desirable!)

#### Factor 2: Inter-Item Correlations
**Higher correlations → Higher α**

**Optimal range:** r = 0.30-0.70 between items
- Too low (< 0.30) → Items don't measure same construct
- Too high (> 0.70) → Items are redundant

#### Factor 3: Dimensionality
**Alpha assumes unidimensionality**

**Problem:** Multidimensional scales can have misleading α
**Solution:** Calculate α for each subscale separately

### Item-Total Correlations

**Definition:** Correlation between each item and total scale score (with item removed)

**Standards:**
- r > 0.40 = Good item
- r = 0.30-0.40 = Acceptable
- r < 0.30 = Poor item (consider removing)

**Check:** "Cronbach's Alpha if Item Deleted"
- If α increases substantially when item removed → delete that item
- Indicates item is harming scale consistency

### Alternative: Composite Reliability (CR)

**Used with CFA/SEM models**

**Advantages over α:**
- Uses factor loadings from CFA
- Doesn't assume equal item loadings
- Generally more accurate

#### Formula:
```
CR = (Σλᵢ)² / [(Σλᵢ)² + Σδᵢ]

Where:
λᵢ = standardized factor loading for item i
δᵢ = error variance for item i
```

**Interpretation:** Same as Cronbach's α (≥ 0.70 acceptable, ≥ 0.80 good)

**Report both:** α for comparison with prior research, CR for accuracy

### Alternative: McDonald's Omega (ω)

**Increasingly preferred** over Cronbach's α

**Advantages:**
- Doesn't assume tau-equivalence (equal loadings)
- More accurate for multidimensional scales
- Better estimate of true reliability

**Interpretation:** Same thresholds as α

**Software:** R packages (e.g., psych, MBESS), Mplus

---

## 2. Test-Retest Reliability

### What is Test-Retest Reliability?

**Definition:** The consistency of scores when the same measure is administered to the same people at two different time points.

**Logic:** If measuring a stable trait, scores should be similar over time.

### When to Use Test-Retest

**Appropriate for:**
- ✅ Personality traits (stable)
- ✅ Abilities (relatively stable)
- ✅ Attitudes (moderately stable)

**Not appropriate for:**
- ❌ Moods/emotions (change rapidly)
- ❌ States that fluctuate
- ❌ Constructs expected to change

### How to Conduct Test-Retest Study

#### Step 1: Select Time Interval

**Too short (< 1 week):**
- Participants remember responses
- Inflates reliability (memory effect)

**Too long (> 3 months):**
- True change may occur
- Deflates reliability

**Recommended intervals:**

| Construct Type | Interval |
|----------------|----------|
| Stable traits | 2-4 weeks |
| Attitudes/perceptions | 2-3 weeks |
| Knowledge/abilities | 2-6 weeks |
| Organizational constructs | 1-2 weeks |

#### Step 2: Administer Measure Twice
- Same participants
- Same conditions (time of day, location)
- Track participants (need matched data)

**Sample size:** Minimum 50, preferably 100+

#### Step 3: Calculate Correlation

**Most common:** Pearson correlation (r) between Time 1 and Time 2 scores

**Interpretation:**

| r | Interpretation |
|---|----------------|
| r > 0.80 | Excellent stability |
| r = 0.70-0.80 | Good stability |
| r = 0.60-0.70 | Acceptable stability |
| r < 0.60 | Questionable stability |

#### Step 4: Assess True Change vs. Error

**Problem:** Low correlation could mean:
- Unreliable measure, OR
- Actual change in construct

**Solutions:**
1. Check if mean scores changed (paired t-test)
2. Examine individual change patterns
3. Consider theoretical expectations
4. Collect qualitative data on changes

### Intraclass Correlation Coefficient (ICC)

**Alternative to Pearson r** (more sophisticated)

**Advantages:**
- Accounts for systematic bias (mean differences)
- More appropriate for reliability
- Provides confidence intervals

**ICC Formula Types:**
- ICC(1,1): Single rater, one-way random effects
- ICC(2,1): Single rater, two-way random effects
- ICC(3,1): Single rater, two-way fixed effects

**For test-retest: Use ICC(2,1) or ICC(3,1)**

**Interpretation:** Same thresholds as Pearson r

---

## 3. Inter-Rater Reliability

### What is Inter-Rater Reliability?

**Definition:** The consistency of scores when multiple raters/observers independently rate the same targets.

**When relevant:**
- Observational measures (e.g., coding behaviors)
- Performance ratings
- Content analysis
- Qualitative coding

**Not relevant for:**
- Self-report surveys (only one rater)
- Objective measures

### Methods for Assessing Inter-Rater Reliability

#### For Continuous Ratings

**Intraclass Correlation Coefficient (ICC)**

**Types:**
- ICC(1,k): Average of k raters, one-way random
- ICC(2,k): Average of k raters, two-way random
- ICC(3,k): Average of k raters, two-way fixed

**Interpretation:**

| ICC | Interpretation |
|-----|----------------|
| > 0.90 | Excellent |
| 0.75-0.90 | Good |
| 0.50-0.75 | Moderate |
| < 0.50 | Poor |

#### For Categorical Ratings

**Cohen's Kappa (κ) - 2 raters**

Corrects for chance agreement

**Formula:**
```
κ = (Pₒ - Pₑ) / (1 - Pₑ)

Where:
Pₒ = observed agreement
Pₑ = expected agreement by chance
```

**Interpretation:**

| κ | Interpretation |
|---|----------------|
| > 0.80 | Excellent |
| 0.60-0.80 | Substantial |
| 0.40-0.60 | Moderate |
| 0.20-0.40 | Fair |
| < 0.20 | Poor |

**Fleiss' Kappa** - 3+ raters (extension of Cohen's κ)

#### Percent Agreement

**Simplest metric:** % of ratings that match

**Problem:** Doesn't account for chance agreement

**Only use when:**
- Categories are unbalanced (kappa problematic)
- Supplementing other metrics

### Improving Inter-Rater Reliability

**Strategies:**
1. **Clear operational definitions**
2. **Rater training** with practice examples
3. **Rating manuals** with decision rules
4. **Regular calibration meetings**
5. **Independent coding** (no collaboration until complete)

---

## 4. Parallel Forms Reliability

### What is Parallel Forms Reliability?

**Definition:** Consistency between two equivalent forms of the same measure.

**When used:**
- Educational testing (alternate exam forms)
- Repeated assessments (to prevent practice effects)
- Pre-post designs (equivalent forms)

**Requirements:**
- Both forms measure same construct
- Equal difficulty
- Same format and length

**Method:** Correlation between Form A and Form B scores

**Interpretation:** Same as test-retest (r > 0.70)

---

## Advanced Topics

### Standard Error of Measurement (SEM)

**Definition:** Average amount of error in individual scores

**Formula:**
```
SEM = SD × √(1 - rₓₓ)

Where:
SD = standard deviation of scale
rₓₓ = reliability coefficient
```

**Use:** Construct confidence intervals around individual scores

**Example:**
```
Scale: Mean = 50, SD = 10, α = 0.85
SEM = 10 × √(1 - 0.85) = 3.87

Individual score = 60
95% CI: 60 ± (1.96 × 3.87) = [52.4, 67.6]
```

**Implication:** Individual's "true score" likely falls within this range.

### Reliability and Statistical Power

**Unreliable measures reduce power to detect effects**

**Effect of reliability on correlation:**
```
Observed r = True r × √(rₓₓ × rᵧᵧ)

Where:
rₓₓ = reliability of measure X
rᵧᵧ = reliability of measure Y
```

**Example:**
```
True correlation: r = 0.50
Reliabilities: rₓₓ = 0.70, rᵧᵧ = 0.70

Observed r = 0.50 × √(0.70 × 0.70) = 0.35
```

**Implication:** Need larger samples to detect effects with unreliable measures.

---

## Common Mistakes

### Mistake 1: Only Reporting Cronbach's Alpha
**Problem:** α is necessary but not sufficient
**Solution:** Report multiple forms of reliability when appropriate

### Mistake 2: Using α for Multidimensional Scales
**Problem:** Total scale α is misleading
**Solution:** Calculate α for each subscale

### Mistake 3: Accepting α > 0.90 Without Question
**Problem:** May indicate redundant items
**Solution:** Check inter-item correlations; consider shortening scale

### Mistake 4: Not Checking Item-Total Correlations
**Problem:** Miss poor items that harm reliability
**Solution:** Always examine item-level statistics

### Mistake 5: Wrong Test-Retest Interval
**Problem:** Too short (memory) or too long (true change)
**Solution:** Use theory to guide interval selection

---

## Reporting Reliability

### Minimum Reporting Standards:

For **every** scale/subscale:
- [ ] Cronbach's α (and/or ω)
- [ ] Number of items
- [ ] Sample size
- [ ] Mean inter-item correlation (optional but helpful)

If using **CFA:**
- [ ] Composite Reliability (CR)
- [ ] Average Variance Extracted (AVE)

If **test-retest** conducted:
- [ ] Time interval
- [ ] Sample size
- [ ] Correlation coefficient (r or ICC)
- [ ] Mean differences (if any)

If **inter-rater** used:
- [ ] Number of raters
- [ ] ICC or Kappa value
- [ ] Type of ICC used
- [ ] Percent agreement (supplemental)

### Example Reporting:

> "The Job Satisfaction scale demonstrated good internal consistency (α = 0.87,
> 10 items, N = 342). Item-total correlations ranged from 0.51 to 0.74.
> Test-retest reliability over a two-week interval was strong (r = 0.82, n = 78).
> Composite reliability from CFA was 0.89, with AVE = 0.52."

---

## Quick Reference Checklist

Before proceeding with scale validation:

- [ ] Cronbach's α calculated for each scale/subscale
- [ ] α meets minimum threshold (≥ 0.70)
- [ ] Item-total correlations examined (all > 0.30)
- [ ] Poor items identified and removed/revised
- [ ] Test-retest reliability assessed (if appropriate)
- [ ] Inter-rater reliability assessed (if applicable)
- [ ] All reliability values properly documented

---

## Next Steps

**→ After establishing reliability:** [Test Criterion Validity](05-criterion-validity.md)

**→ To understand reporting:** [Statistical Evidence & Reporting](07-statistical-evidence.md)

**→ For complete validation plan:** [Validation Timeline & Process](06-validation-timeline.md)

---

**Related Resources:**
- [Glossary: Reliability Terms](glossary.md#reliability)
- [Resources: Reliability Calculators](resources.md#calculators)
