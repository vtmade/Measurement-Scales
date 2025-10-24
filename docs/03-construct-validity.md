# Construct Validity

## Overview

**Construct validity** addresses the critical question: **"Does this scale actually measure what it claims to measure?"**

This is the most comprehensive and important type of validity. Construct validity involves gathering multiple types of evidence to demonstrate that your scale measures the intended theoretical construct.

## The Four Types of Construct Validity Evidence

1. **Factorial Validity** - Do items cluster together as expected?
2. **Convergent Validity** - Does it correlate with related measures?
3. **Discriminant Validity** - Does it NOT correlate with unrelated measures?
4. **Nomological Validity** - Does it behave according to theory?

---

## 1. Factorial Validity

### What is Factorial Validity?

Factorial validity examines whether items group together (form factors) in ways consistent with the theoretical structure of your construct.

**Key questions:**
- Do items measuring the same dimension cluster together?
- Are there unexpected groupings?
- Does the factor structure match theory?

### Two Approaches: EFA vs. CFA

#### Exploratory Factor Analysis (EFA)
**Purpose**: Discover the factor structure when it's unknown or uncertain

**When to use:**
- Initial scale development
- First time testing factor structure
- Exploring dimensionality

**What it does:**
- Lets data reveal how many factors exist
- Shows which items load on which factors
- Identifies items that don't fit

#### Confirmatory Factor Analysis (CFA)
**Purpose**: Test whether data fit a hypothesized factor structure

**When to use:**
- After EFA establishes structure
- Testing established scales in new contexts
- Final validation studies

**What it does:**
- Tests specific hypothesized model
- Provides fit statistics
- Compares alternative models

**Best Practice:** Use BOTH
1. EFA with Sample 1 to explore structure
2. CFA with Sample 2 to confirm structure

### Sample Size Requirements

**Minimum:**
- 200 participants (absolute minimum)
- 5 participants per item
- 10 participants per item (preferred)

**Example:**
- 20-item scale → 200 minimum, 300+ preferred

**Warning:** Smaller samples (n < 200) can produce unstable factor solutions.

### Conducting EFA

#### Step 1: Verify Assumptions
**Kaiser-Meyer-Olkin (KMO) Test**
- Measures sampling adequacy
- KMO > 0.80 = good
- KMO > 0.90 = excellent
- KMO < 0.60 = unacceptable

**Bartlett's Test of Sphericity**
- Tests if correlations exist
- Should be significant (p < 0.05)

#### Step 2: Determine Number of Factors
Methods:
1. **Kaiser Criterion**: Eigenvalues > 1
2. **Scree Plot**: Look for "elbow"
3. **Parallel Analysis**: Compare to random data (most accurate)
4. **Theory**: What does theory suggest?

**Best practice:** Use multiple methods and theory to decide.

#### Step 3: Extract Factors
**Extraction methods:**
- Principal Axis Factoring (preferred for EFA)
- Maximum Likelihood (if data are normal)
- Principal Components (technically PCA, not EFA)

#### Step 4: Rotate Factors
**Purpose:** Make factors more interpretable

**Rotation types:**
- **Orthogonal (Varimax)**: Assumes factors are uncorrelated
- **Oblique (Promax, Oblimin)**: Allows factors to correlate

**When to use which:**
- Most psychological constructs correlate → Use oblique
- Need factors to be independent → Use orthogonal

#### Step 5: Interpret Factor Loadings

**Factor loading = correlation between item and factor**

| Loading | Interpretation |
|---------|---------------|
| > 0.70 | Excellent |
| 0.60-0.70 | Very good |
| 0.50-0.60 | Good |
| 0.40-0.50 | Acceptable (in early stages) |
| < 0.40 | Poor - consider removing |

**Red flags:**
- ❌ Cross-loading (item loads > 0.30 on multiple factors)
- ❌ No items load strongly on a factor
- ❌ Factors with < 3 items (unstable)

#### Step 6: Item Deletion Decisions

Delete items that:
- Load < 0.40 on all factors
- Cross-load significantly (> 0.30 on multiple factors)
- Create factors with < 3 items
- Are theoretically inconsistent with their factor

**Iterative process:** Re-run EFA after deletions until clean structure emerges.

### Conducting CFA

#### Purpose of CFA
- Test specific factor structure
- Compare competing models
- Establish measurement model before structural equation modeling (SEM)

#### Specifying Your Model

**Example: Job Satisfaction (3-factor model)**
```
Factor 1: Work Itself (Items 1-5)
Factor 2: Pay & Benefits (Items 6-10)
Factor 3: Supervision (Items 11-15)

Specifications:
- Items load only on their designated factor
- Factors allowed to correlate
- Item error terms uncorrelated
```

#### Evaluating Model Fit

Multiple fit indices needed (no single "magic" number):

**Absolute Fit Indices:**

| Index | Good Fit | Acceptable Fit |
|-------|----------|----------------|
| χ² (Chi-square) | Non-significant (p > 0.05) | - |
| RMSEA | < 0.06 | 0.06-0.08 |
| SRMR | < 0.08 | 0.08-0.10 |

**Incremental Fit Indices:**

| Index | Good Fit | Acceptable Fit |
|-------|----------|----------------|
| CFI | > 0.95 | 0.90-0.95 |
| TLI | > 0.95 | 0.90-0.95 |

**Note on χ²:** Very sensitive to sample size. Often significant even with good fit when n > 200. Don't rely on it alone.

**Report multiple indices**: "Model fit was acceptable: χ²(87) = 156.3, p < 0.001, CFI = 0.94, TLI = 0.93, RMSEA = 0.065 [90% CI: 0.051, 0.078], SRMR = 0.068."

#### Improving Model Fit

If fit is poor, consider:

1. **Modification Indices (MI)**
   - Suggest where model misspecifies
   - Shows potential improvements
   - **Warning:** Only make theoretically justified changes

2. **Common Issues:**
   - Correlated error terms (items with similar wording)
   - Cross-loadings (item fits better on different factor)
   - Poor items (low loadings)

3. **Model Comparisons:**
   - Test alternative factor structures
   - Compare fit indices
   - Use chi-square difference test for nested models

**Example comparisons:**
- 1-factor vs. 3-factor model
- Correlated factors vs. uncorrelated factors
- Higher-order factor vs. correlated factors

---

## 2. Convergent Validity

### What is Convergent Validity?

**Definition:** The extent to which your scale correlates with other measures of the same or similar constructs.

**Logic:** If your scale truly measures X, it should correlate with other measures of X.

### How to Test Convergent Validity

#### Step 1: Identify Related Constructs
Select measures that **theoretically should** correlate with your scale.

**Example: Job Satisfaction scale should correlate with:**
- Other job satisfaction measures
- Organizational commitment
- Work engagement
- Life satisfaction
- Positive affect at work

#### Step 2: Administer Both Measures
- Include validated measure(s) in your study
- Same participants, same time
- Calculate correlations

#### Step 3: Interpret Correlations

| Correlation | Interpretation |
|-------------|----------------|
| r > 0.70 | Strong convergence (perhaps redundant) |
| r = 0.50-0.70 | Good convergence |
| r = 0.30-0.50 | Moderate convergence |
| r < 0.30 | Weak convergence (problematic) |

**Guidelines:**
- Correlation with similar measures: r > 0.50 expected
- Correlation with related measures: r = 0.30-0.60 expected

### Advanced: Average Variance Extracted (AVE)

**AVE** measures the average amount of variance in items explained by the construct.

**Formula:**
```
AVE = (Σλ²) / n

Where:
λ = standardized factor loading
n = number of items
```

**Standards:**
- AVE > 0.50 = good convergent validity
- Means construct explains > 50% of item variance

**Note:** Calculated from CFA results.

---

## 3. Discriminant Validity

### What is Discriminant Validity?

**Definition:** The extent to which your scale does NOT correlate with measures of theoretically distinct constructs.

**Logic:** If your scale measures X, it should NOT correlate highly with measures of Y (where X ≠ Y).

### Why It Matters

**Problem without discriminant validity:**
- You might be measuring something else
- Scale lacks uniqueness
- Construct overlap/redundancy

**Example:** If your "Job Satisfaction" scale correlates r = 0.85 with "Organizational Commitment," are you measuring the same thing?

### How to Test Discriminant Validity

#### Step 1: Identify Unrelated Constructs
Select measures that **theoretically should NOT** correlate with your scale.

**Example: Job Satisfaction should have low correlation with:**
- Personality traits (e.g., Openness)
- Cognitive ability
- Unrelated attitudes (e.g., political views)
- Physical characteristics

#### Step 2: Calculate Correlations

**Interpret:**

| Correlation | Interpretation |
|-------------|----------------|
| r < 0.30 | Good discriminant validity |
| r = 0.30-0.50 | Questionable (depends on theory) |
| r > 0.50 | Poor discriminant validity |
| r > 0.70 | Likely measuring the same construct |

### Advanced Tests

#### Fornell-Larcker Criterion
- Compare AVE to squared correlations with other constructs
- **Rule:** √AVE should exceed correlations with other constructs

**Example:**
```
Job Satisfaction AVE = 0.64, √AVE = 0.80
Correlation with Org Commitment = 0.70

0.80 > 0.70 ✓ Discriminant validity supported
```

#### Heterotrait-Monotrait Ratio (HTMT)
- Ratio of between-trait to within-trait correlations
- **Rule:** HTMT < 0.85 (conservative: < 0.70)

**Advantages:**
- More sensitive than Fornell-Larcker
- Performs better with small samples

---

## 4. Nomological Validity

### What is Nomological Validity?

**Definition:** The extent to which your scale behaves according to theoretical expectations within a network of constructs.

**In plain English:** Does your scale predict things it theoretically should, in the way theory says it should?

### The Nomological Network

Developed by Cronbach & Meehl (1955), this concept means:
- Constructs exist within networks of relationships
- Theory specifies how constructs relate
- Valid measures should reproduce these relationships

### Testing Nomological Validity

#### Step 1: Derive Theoretical Predictions
Based on theory, identify:
- **Antecedents** - What causes your construct?
- **Consequences** - What does your construct cause?
- **Correlates** - What relates to your construct?
- **Moderators** - What strengthens/weakens relationships?

**Example: Job Satisfaction Theory**
```
Antecedents:
- Job characteristics → Job Satisfaction

Consequences:
- Job Satisfaction → Performance
- Job Satisfaction → Turnover (negative)

Correlates:
- Job Satisfaction ↔ Life Satisfaction

Moderators:
- Job Satisfaction × Commitment → Performance
```

#### Step 2: Test Predictions Empirically
Design studies to test whether your scale:
- Correlates with predicted antecedents
- Predicts expected consequences
- Shows expected moderation effects
- Behaves differently across known groups

#### Step 3: Evaluate Pattern of Results

**Strong nomological validity:**
- ✅ Most predictions confirmed
- ✅ Effect sizes align with theory
- ✅ Directions are as expected
- ✅ Unexpected findings are rare

**Weak nomological validity:**
- ❌ Predictions frequently not confirmed
- ❌ Relationships are weaker than expected
- ❌ Unexpected correlations emerge
- ❌ Known-groups differences don't appear

### Examples from Research

#### Example 1: Burnout Scale (Maslach et al.)

**Theoretical predictions:**
- Workload → Burnout (+)
- Social support → Burnout (-)
- Burnout → Turnover intentions (+)
- Burnout → Job performance (-)

**Results:** All predictions confirmed → Strong nomological validity

#### Example 2: Grit Scale (Duckworth et al.)

**Theoretical predictions:**
- Grit → Academic achievement (+)
- Grit → Retention in challenging programs (+)
- Grit predicts above conscientiousness

**Results:** Predictions confirmed across multiple studies → Nomological validity established

---

## Integration: Building a Complete Validity Argument

Strong construct validity requires **multiple types of evidence working together:**

```
Factorial Validity → "Items measure intended factors"
        +
Convergent Validity → "Scale relates to similar constructs"
        +
Discriminant Validity → "Scale is distinct from different constructs"
        +
Nomological Validity → "Scale behaves according to theory"
        =
STRONG CONSTRUCT VALIDITY
```

## Common Mistakes to Avoid

### Mistake 1: Relying on EFA Alone
**Problem:** EFA is exploratory; you need CFA for confirmation
**Solution:** Use both EFA (Sample 1) and CFA (Sample 2)

### Mistake 2: Ignoring Poor Model Fit
**Problem:** Accepting models with CFI < 0.90, RMSEA > 0.10
**Solution:** Revise model or acknowledge limitations

### Mistake 3: Only Testing Convergent Validity
**Problem:** Doesn't show your scale is unique
**Solution:** Always include discriminant validity tests

### Mistake 4: Modifying Models Without Theory
**Problem:** Data-driven changes that don't make sense
**Solution:** Only make theoretically justified modifications

### Mistake 5: Single Study Validation
**Problem:** Results may be sample-specific
**Solution:** Cross-validate with multiple samples

---

## Reporting Construct Validity

### For Publications, Report:

**Factorial Validity:**
- [ ] EFA: KMO, Bartlett's, eigenvalues, % variance explained, factor loadings
- [ ] CFA: Fit indices (χ², CFI, TLI, RMSEA, SRMR), standardized loadings
- [ ] Sample sizes for each analysis
- [ ] Rotation method (for EFA)

**Convergent Validity:**
- [ ] Correlations with related measures
- [ ] Significance levels
- [ ] AVE (if using CFA)
- [ ] Theoretical rationale for each measure

**Discriminant Validity:**
- [ ] Correlations with unrelated measures
- [ ] Fornell-Larcker or HTMT results
- [ ] Comparison to convergent validity correlations

**Nomological Validity:**
- [ ] Theoretical framework
- [ ] Predicted relationships
- [ ] Empirical results
- [ ] Interpretation of pattern

---

## Quick Decision Tree

**"How many factors do I have?"**
→ Run EFA with multiple methods (eigenvalues, scree plot, parallel analysis)
→ Compare to theory
→ Confirm with CFA in new sample

**"Is my CFA fit good enough?"**
→ CFI/TLI > 0.90 AND RMSEA < 0.08 → Acceptable
→ CFI/TLI > 0.95 AND RMSEA < 0.06 → Good
→ Below this → Revise model or items

**"How many convergent validity tests?"**
→ Minimum: 2 related measures
→ Preferred: 3-5 related measures
→ Include at least one established measure of same construct

**"How many discriminant validity tests?"**
→ Minimum: 2 unrelated measures
→ Preferred: 3-4 theoretically distinct constructs

---

## Next Steps

**→ After establishing construct validity:** [Test Reliability](04-reliability.md)

**→ To understand what to report:** [Statistical Evidence & Reporting](07-statistical-evidence.md)

**→ To see examples:** [Real-World Examples](08-examples.md)

---

**Related Resources:**
- [Glossary: Factor Analysis Terms](glossary.md#factor-analysis)
- [Resources: Software for CFA/SEM](resources.md#statistical-software)
