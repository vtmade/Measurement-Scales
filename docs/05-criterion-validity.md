---
layout: default
---

# Criterion Validity

## Overview

**Criterion validity** addresses the practical question: **"Does the scale predict real-world outcomes?"**

This type of validity demonstrates that your measure has practical utility by showing it relates to concrete, observable criteria (outcomes, behaviors, or status).

---

## What is Criterion Validity?

**Definition:** The extent to which a scale correlates with an external criterion that it should theoretically predict or relate to.

**The "criterion"** is typically:
- A concrete outcome (e.g., job performance, sales)
- An observable behavior (e.g., attendance, turnover)
- A diagnostic status (e.g., clinical diagnosis)
- An established "gold standard" measure

**Key distinction from construct validity:**
- **Construct validity**: Relationships with abstract constructs
- **Criterion validity**: Relationships with concrete outcomes

---

## Types of Criterion Validity

### 1. Concurrent Validity

**Definition:** The scale correlates with a criterion measured **at the same time**.

**Purpose:** Demonstrates the scale relates to current status or outcomes

**When used:**
- Validating against established measures
- Diagnosing current state
- Assessing current performance

**Example questions:**
- Does this depression scale identify people currently in treatment?
- Does this job satisfaction measure relate to current performance ratings?
- Does this aptitude test correlate with current GPA?

---

### 2. Predictive Validity

**Definition:** The scale measured at **Time 1** predicts a criterion measured at **Time 2** (future).

**Purpose:** Demonstrates the scale forecasts future outcomes

**When used:**
- Selection decisions (hiring, admissions)
- Risk assessment
- Intervention planning
- Longitudinal research

**Example questions:**
- Does this aptitude test (Time 1) predict job performance (6 months later)?
- Does this burnout scale (Time 1) predict turnover (1 year later)?
- Does this risk assessment (Time 1) predict recidivism (2 years later)?

---

## The Difference Between Concurrent and Predictive

| Aspect | Concurrent | Predictive |
|--------|-----------|------------|
| **Timing** | Criterion measured at same time | Criterion measured in future |
| **Purpose** | Assess current relationship | Forecast future outcomes |
| **Design** | Cross-sectional | Longitudinal |
| **Use case** | Diagnosis, classification | Selection, prognosis |
| **Timeline** | Quick (single data collection) | Slow (requires follow-up) |

**Both are important:** Concurrent validity shows current utility; predictive validity shows forecasting power.

---

## Conducting Concurrent Validity Studies

### Step 1: Identify Appropriate Criteria

**Good criteria are:**
- ✅ Theoretically relevant
- ✅ Objectively measurable
- ✅ Practically important
- ✅ Independent from the predictor

**Examples by domain:**

| Domain | Scale | Concurrent Criterion |
|--------|-------|---------------------|
| Clinical | Depression scale | Current diagnosis, medication use |
| Organizational | Job satisfaction | Current performance ratings, absenteeism |
| Educational | Academic motivation | Current GPA, study time |
| Health | Exercise intentions | Current weekly activity minutes |

### Step 2: Collect Data

**Requirements:**
- Administer scale and measure criterion
- Same participants, same time period
- Sufficient sample size (n > 100 recommended)

**Common method variance warning:**
- Don't use only self-report criteria
- Include objective measures when possible
- Use different sources for predictor and criterion

### Step 3: Analyze Relationships

**Basic analysis:** Correlation

**Interpretation:**

| Correlation | Interpretation |
|-------------|----------------|
| r > 0.50 | Strong criterion validity |
| r = 0.30-0.50 | Moderate criterion validity |
| r = 0.10-0.30 | Weak criterion validity |
| r < 0.10 | Negligible criterion validity |

**Context matters:**
- Expected magnitude depends on theory
- Some important outcomes are hard to predict (r = 0.20-0.30 can be meaningful)
- Don't expect perfect correlations (r = 1.0)

**Advanced analyses:**
- Regression (control for other variables)
- ROC curves (for diagnostic purposes)
- Incremental validity (does scale add beyond existing predictors?)

### Step 4: Evaluate Practical Significance

**Statistical significance ≠ Practical importance**

Consider:
- **Effect size:** Is r large enough to matter?
- **Base rates:** How common is the criterion?
- **Costs:** What are consequences of errors?
- **Alternatives:** How does it compare to existing measures?

**Example:**
```
Selection Test:
r = 0.25 with job performance (statistically significant, p < 0.001)

Seems small, but:
- Predicting performance is hard (0.25 is good)
- With large applicant pool, selects better performers
- Cost of bad hires is high
- Better than unstructured interviews (r ≈ 0.15)

Conclusion: Practically useful despite "small" correlation
```

---

## Conducting Predictive Validity Studies

### Step 1: Select Criterion and Time Lag

**Criterion selection:**
- Choose outcomes theory says scale should predict
- Ensure criterion can be measured reliably
- Consider multiple criteria (strengthen evidence)

**Time lag considerations:**

| Construct | Typical Lag | Rationale |
|-----------|-------------|-----------|
| Academic performance | 1 semester to 1 year | Grades available |
| Job performance | 6 months to 1 year | Performance reviews |
| Employee turnover | 6 months to 2 years | Turnover events |
| Clinical outcomes | Varies (3 months to 2 years) | Depends on treatment |
| Behavioral change | 1-6 months | Habit formation |

**Too short:** Criterion may not have developed
**Too long:** Other factors may interfere, attrition increases

### Step 2: Design Longitudinal Study

**Requirements:**
1. **Time 1:** Administer scale
2. **Time 2:** Measure criterion
3. Track participants (minimize attrition)
4. Plan for dropouts (collect contact info, incentives)

**Sample size:**
- Minimum: 100 (accounting for ~20% attrition)
- Preferred: 200+
- For rare outcomes: Larger samples needed

### Step 3: Analyze Predictive Relationships

**Basic approach:** Correlation or regression

**Model:**
```
Criterion (Time 2) = β₀ + β₁ × Predictor (Time 1) + error
```

**Controlling for baseline:**
```
Criterion (T2) = β₀ + β₁ × Predictor (T1) + β₂ × Criterion (T1) + error
```

This tests if scale predicts **change** in criterion.

### Step 4: Address Attrition

**Problem:** People who drop out may differ from completers

**Solutions:**
1. **Compare completers vs. dropouts** on Time 1 variables
2. **Report attrition rate** and reasons
3. **Use multiple imputation** if attrition is random
4. **Sensitivity analyses** (best case/worst case scenarios)

**Reporting:**
> "Of 250 participants at Time 1, 198 (79.2%) completed Time 2 assessments.
> Completers and non-completers did not differ significantly on age, gender,
> or predictor scores (all p > 0.10)."

---

## Advanced: Incremental Validity

### What is Incremental Validity?

**Question:** Does your scale predict criteria **beyond** what existing measures already predict?

**Why it matters:**
- Demonstrates unique utility
- Justifies using additional measure
- Shows value-added

### How to Test Incremental Validity

**Hierarchical regression:**

**Step 1:** Enter existing predictors
```
Criterion = β₀ + β₁ × Existing Measure + error

R² = 0.25 (existing measure explains 25% of variance)
```

**Step 2:** Add your new scale
```
Criterion = β₀ + β₁ × Existing + β₂ × New Scale + error

R² = 0.35 (new model explains 35% of variance)
```

**Incremental validity:**
```
ΔR² = 0.35 - 0.25 = 0.10 (10% additional variance)

F-test: Is ΔR² significant?
```

**Interpretation:**

| ΔR² | Interpretation |
|-----|----------------|
| > 0.10 | Substantial incremental validity |
| 0.05-0.10 | Moderate incremental validity |
| 0.02-0.05 | Small but meaningful |
| < 0.02 | Negligible |

**Example:**
> "Job satisfaction predicted turnover intentions (R² = 0.32). Adding our
> engagement scale increased prediction significantly (ΔR² = 0.08, p < 0.001),
> demonstrating incremental validity beyond satisfaction alone."

---

## Criterion Contamination & Deficiency

### Criterion Contamination

**Problem:** Criterion includes irrelevant variance that artificially inflates validity

**Examples:**
- ❌ Using supervisor ratings when supervisor knows test scores
- ❌ Using self-reported criterion when predictor is self-report
- ❌ Criterion influenced by predictor through non-relevant paths

**Solutions:**
- Use independent sources for predictor and criterion
- Blind raters to predictor scores
- Use objective criteria when possible

### Criterion Deficiency

**Problem:** Criterion doesn't capture all relevant aspects of the outcome

**Example:**
- Using only sales volume to validate sales ability
  - Misses: customer satisfaction, ethics, teamwork

**Solutions:**
- Use multiple criteria
- Comprehensive criterion measurement
- Theory-driven criterion selection

---

## Sensitivity and Specificity (For Diagnostic Scales)

When scale is used for **classification** (e.g., diagnosis, selection):

### Key Metrics

**Sensitivity:** % of true positives correctly identified
```
Sensitivity = True Positives / (True Positives + False Negatives)
```

**Specificity:** % of true negatives correctly identified
```
Specificity = True Negatives / (True Negatives + False Positives)
```

**Example: Depression Screening**
```
                    Actual Diagnosis
                    Depressed   Not Depressed
Scale      Positive    80            20         100
Result     Negative    20            180        200
                       100           200         300

Sensitivity = 80/100 = 0.80 (80% of depressed identified)
Specificity = 180/200 = 0.90 (90% of non-depressed identified)
```

### ROC Curves

**Receiver Operating Characteristic (ROC) curve:**
- Plots sensitivity vs. (1 - specificity) at different cut-scores
- Area Under the Curve (AUC) = overall diagnostic accuracy

**AUC interpretation:**

| AUC | Interpretation |
|-----|----------------|
| 0.90-1.00 | Excellent |
| 0.80-0.90 | Good |
| 0.70-0.80 | Acceptable |
| 0.60-0.70 | Poor |
| 0.50-0.60 | Fail |
| 0.50 | No better than chance |

### Selecting Cut-Scores

**Trade-offs:**
- **High sensitivity** (catch all cases) → More false positives
- **High specificity** (avoid false alarms) → More false negatives

**Decision depends on:**
- Cost of false positives vs. false negatives
- Base rate of condition
- Purpose (screening vs. diagnosis)

**Example:**
- **Medical screening:** Favor sensitivity (catch all potential cases)
- **Final diagnosis:** Favor specificity (avoid false diagnoses)

---

## Reporting Criterion Validity

### Minimum Standards:

**Concurrent validity:**
- [ ] Criterion measure(s) described and justified
- [ ] Sample size
- [ ] Correlation coefficients (with p-values)
- [ ] Control variables (if used)

**Predictive validity:**
- [ ] Criterion measure(s) described
- [ ] Time lag between measurements
- [ ] Sample sizes (T1 and T2)
- [ ] Attrition rate and analysis
- [ ] Correlation/regression results
- [ ] Effect sizes

**Diagnostic/classification:**
- [ ] Sensitivity and specificity
- [ ] ROC curve and AUC
- [ ] Cut-score rationale
- [ ] Positive and negative predictive values

### Example Reporting:

> **Concurrent validity:** Job satisfaction (our scale) correlated significantly
> with supervisor-rated performance (r = 0.34, p < 0.001, n = 284) and
> inversely with objective absenteeism (r = -0.28, p < 0.001), supporting
> concurrent validity.
>
> **Predictive validity:** In a 1-year longitudinal study (n = 156, 82% retention),
> Time 1 satisfaction significantly predicted Time 2 turnover intentions
> (β = -0.42, p < 0.001) and actual turnover (OR = 0.45, p < 0.01), controlling
> for baseline turnover intentions.

---

## Common Mistakes

### Mistake 1: Using Only Self-Report Criteria
**Problem:** Common method bias inflates correlations
**Solution:** Include objective or multi-source criteria

### Mistake 2: Ignoring Attrition in Predictive Studies
**Problem:** Results may be biased
**Solution:** Analyze and report attrition; test for bias

### Mistake 3: Expecting Too-High Correlations
**Problem:** Unrealistic expectations (r = 0.80)
**Solution:** Understand that r = 0.30 can be meaningful

### Mistake 4: Not Testing Incremental Validity
**Problem:** Unclear if scale adds value
**Solution:** Compare to existing measures

### Mistake 5: Poor Criterion Measurement
**Problem:** Unreliable criterion attenuates validity
**Solution:** Use validated, reliable criterion measures

---

## Quick Decision Guide

**"What criterion should I use?"**
→ Theory-driven (what should scale predict?)
→ Practical importance (what matters?)
→ Measurable objectively (avoid self-report only)

**"What time lag for predictive validity?"**
→ Long enough for criterion to develop
→ Short enough to maintain sample
→ Typically 6 months to 1 year

**"How large should validity coefficient be?"**
→ Context-dependent
→ r = 0.20-0.40 often meaningful
→ Compare to benchmarks in literature

**"Concurrent or predictive?"**
→ Both if possible
→ Concurrent: quicker, easier
→ Predictive: stronger evidence, practical utility

---

## Next Steps

**→ Plan your validation timeline:** [Validation Timeline & Process](06-validation-timeline.md)

**→ Learn what to report:** [Statistical Evidence & Reporting](07-statistical-evidence.md)

**→ See examples:** [Real-World Examples](08-examples.md)

---

**Related Resources:**
- [Glossary: Criterion Validity Terms](glossary.md#criterion-validity)
- [Resources: Effect Size Benchmarks](resources.md#effect-sizes)
