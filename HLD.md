# אפיון עיצוב — AI Vision Platform

## 1. מטרת הדף

דף הנחיתה צריך לגרום למנהל תפעול, בעל עסק או משקיע להבין בתוך כמה שניות:

> הפלטפורמה מתחברת למצלמות הקיימות, מנתחת את מה שקורה בשטח ומתרגמת וידאו לתובנות, התראות ופעולות.

המטרה אינה להציג רק “AI מתקדם”, אלא להסביר שהמערכת:

* רואה מה קורה בשטח.
* מבינה אירועים תפעוליים.
* מזהה חריגות וסיכונים.
* מאפשרת למנהל לשאול שאלות על הפעילות.
* מספקת תמונת מצב בזמן אמת.

---

# 2. התחושה שהעיצוב צריך להעביר

הכיוון העיצובי הנוכחי מתאים, אבל נחדד אותו.

האתר צריך להרגיש:

* טכנולוגי ומתקדם.
* אמין ורציני.
* מתאים ל־Enterprise.
* תפעולי ולא רק שיווקי.
* חכם, אבל לא עתידני מדי.
* ברור גם לאדם שאינו טכנולוגי.

המסר הרגשי:

> יש לך שליטה מלאה במה שקורה בשטח, גם כשאתה לא נמצא שם.

---

# 3. שפה ויזואלית

## צבעים ראשיים

### רקע ראשי

```css
#03070D
```

שחור עם גוון כחול קל.

### רקע משני

```css
#07111F
```

לכרטיסים, אזורים משניים וסקשנים.

### כחול ראשי

```css
#1677FF
```

לכפתורים, מסגרות פעילות, אייקונים ואלמנטים אינטראקטיביים.

### כחול זוהר

```css
#2F8FFF
```

ל־Glow, הדגשות ואפקטי Vision.

### Cyan משני

```css
#3DE4FF
```

לסטטוסים, Bounding Boxes ונתוני מערכת.

### טקסט ראשי

```css
#F5F7FA
```

### טקסט משני

```css
#8C98A8
```

### הצלחה

```css
#2DD4A7
```

### אזהרה

```css
#F6B94A
```

### תקלה או אירוע חריג

```css
#FF5C6C
```

הצבעים האדום, הירוק והצהוב יופיעו רק בהקשרים תפעוליים, ולא כחלק מהמיתוג הראשי.

---

# 4. טיפוגרפיה

המלצה:

```text
Inter
```

או:

```text
Manrope
```

הטיפוגרפיה צריכה להיות מודרנית, נקייה וקלה לקריאה.

גדלים מומלצים:

```css
Hero title: 64px–72px
Section title: 40px–48px
Card title: 20px–24px
Body text: 16px–18px
Small labels: 12px–14px
```

במובייל:

```css
Hero title: 40px–46px
Section title: 30px–34px
Body text: 16px
```

---

# 5. מבנה דף הנחיתה

## Section 1 — Navbar

ה־Navbar יהיה שקוף בהתחלה ויקבל רקע כהה עם Blur בזמן גלילה.

### צד שמאל

לוגו ושם המוצר.

שם זמני:

```text
VisionOps AI
```

אפשר להחליף בהמשך.

### קישורים

```text
Platform
Solutions
How It Works
Security
About
```

### פעולות

כפתור משני:

```text
Book a Demo
```

כפתור ראשי:

```text
Start Free
```

אם אין עדיין גרסה חינמית, עדיף להשתמש רק ב:

```text
Request a Demo
```

---

# 6. Hero Section

זה החלק החשוב ביותר בדף.

## Badge עליון

```text
AI-Powered Operational Intelligence
```

## כותרת ראשית

המלצה:

> Turn Every Camera Into Operational Intelligence.

חלופה ישירה יותר:

> Understand Everything Happening on the Ground.

חלופה אגרסיבית יותר:

> Your Operations. Seen, Understood, Optimized.

## טקסט משני

> Connect your existing cameras and turn live video into real-time insights, alerts, searchable events and operational decisions.

## כפתורים

כפתור ראשי:

```text
Request a Demo
```

כפתור משני:

```text
See How It Works
```

## אזור ההדגמה

במקום תיבת צ'אט ריקה, נציג Preview של המוצר.

המסך יכלול:

* וידאו ממצלמה או הדמיה של מחסן, חנות או מפעל.
* Bounding Boxes סביב אנשים, רכבים או ציוד.
* תגיות כמו:

  * Worker detected
  * Safety gear missing
  * Queue length: 7
  * Restricted zone activity
* Timeline של אירועים.
* KPI קטן בצד.
* חלון AI Assistant משני.

### דוגמה לשאלה בתוך הצ'אט

```text
What happened near loading bay 3 this morning?
```

### תשובת המערכת

```text
Between 08:14 and 08:27, three delivery vehicles arrived.
One vehicle remained idle for 11 minutes and caused a loading delay.
```

כך המשתמש מבין שהצ'אט הוא שכבת אינטראקציה מעל מערכת ה־Vision.

---

# 7. Social Proof

מתחת ל־Hero:

```text
Built for teams managing real-world operations
```

אפשר להציג לוגואים זמניים או קטגוריות:

```text
Retail
Warehouses
Manufacturing
Construction
Hospitality
Transportation
```

אם עדיין אין לקוחות, לא נציג לוגואים מומצאים. במקום זאת נציג:

> Designed for operations teams across retail, logistics, manufacturing and physical security.

---

# 8. Problem Section

## כותרת

> You Have Cameras. But Not Operational Visibility.

## תוכן

שלושה כרטיסים:

### Cameras Record, But Don’t Explain

המצלמות אוספות אלפי שעות וידאו, אבל המנהל עדיין צריך לצפות ולחפש ידנית.

### Managers Discover Problems Too Late

עומסים, עיכובים, אזורים לא מאוישים ואירועי בטיחות מתגלים רק לאחר שנוצר נזק.

### Operational Data Is Fragmented

הווידאו, מערכות העסק והדוחות אינם מחוברים לתמונה אחת ברורה.

---

# 9. Solution Section

## כותרת

> From Live Video to Actionable Decisions.

ארבעה שלבים:

### 1. Connect

חיבור למצלמות הקיימות ללא החלפת תשתית.

### 2. Detect

זיהוי אנשים, ציוד, אירועים, התנהגויות ותבניות.

### 3. Understand

ניתוח ההקשר העסקי והתפעולי של האירוע.

### 4. Act

שליחת התראה, יצירת משימה, עדכון מערכת או הפעלת Workflow.

מומלץ להציג זאת כתרשים אופקי:

```text
Camera → Vision AI → Operational Context → Alert / Insight / Action
```

---

# 10. Product Capabilities

סקשן עם שישה כרטיסים.

## Real-Time Event Detection

זיהוי אירועים בזמן אמת מתוך מצלמות קיימות.

## Natural Language Video Search

חיפוש אירועים באמצעות שאלות רגילות.

דוגמה:

```text
Show me every time the loading area was blocked yesterday.
```

## Automated Alerts

שליחת התראות לפי חוקים, רמת סיכון או התנהגות חריגה.

## Operational Analytics

מדידת זמני המתנה, עומסים, תנועת עובדים, ניצול אזורים ותהליכים.

## Multi-Site Visibility

ניהול מספר סניפים, אתרים או מתחמים ממקום אחד.

## AI Operations Assistant

סיכומים, תשובות והמלצות המבוססים על מה שהמערכת רואה בשטח.

---

# 11. Use Cases

הסקשן יחולק לטאבים.

## Retail

* מדידת תורים.
* זיהוי מדפים ריקים.
* אזורים ללא עובדים.
* ניתוח תנועת לקוחות.

## Warehouses

* עיכובים ברציפי טעינה.
* חסימות.
* ציוד שנמצא באזור לא נכון.
* חריגות בתהליכי ליקוט.

## Manufacturing

* ניטור פס ייצור.
* זיהוי עצירות.
* בטיחות עובדים.
* חריגות בתהליך.

## Construction

* ציוד מגן.
* כניסה לאזורים מסוכנים.
* ניטור נוכחות.
* שימוש לא תקין בציוד.

## Hospitality

* עומסים.
* זמני שירות.
* ניקיון אזורים.
* תפעול צוותים.

---

# 12. Demo Section

סקשן כהה עם מסך מוצר גדול.

בצד שמאל:

> Ask Your Operations Anything.

דוגמאות לשאלות מתחלפות:

```text
Why was the loading process delayed today?
```

```text
Which locations had the longest customer queues?
```

```text
Show me every safety incident from the last seven days.
```

```text
Which areas were left unattended?
```

בצד ימין תוצג תשובת המערכת עם:

* סיכום.
* וידאו רלוונטי.
* ציר זמן.
* אירועים.
* המלצה לפעולה.

---

# 13. Trust and Security

חשוב מאוד למוצר שעובד עם מצלמות.

## כותרת

> Built With Privacy and Security at Its Core.

נקודות:

* Role-based access.
* Data encryption.
* Configurable retention.
* Audit logs.
* Private cloud or on-premise deployment.
* Face blurring and privacy zones.
* No facial recognition by default.

לא נתחייב כרגע לתקנים כמו SOC 2 או ISO אם הם עדיין אינם קיימים. אפשר לכתוב:

```text
Designed for enterprise security and compliance requirements.
```

---

# 14. Final CTA

## כותרת

> See What Your Operations Have Been Missing.

## טקסט

> Connect your cameras and turn daily activity into measurable operational intelligence.

## כפתור

```text
Book a Demo
```

---

# 15. Footer

עמודות:

```text
Platform
Solutions
Company
Resources
Legal
```

לינקים מרכזיים:

```text
Privacy Policy
Terms of Service
Security
Contact
```

---

# 16. אפקטים ואנימציות

האנימציות צריכות להיות עדינות ולא לפגוע בתחושת ה־Enterprise.

### Hero

* Glow כחול שזז לאט.
* חלקיקים או נקודות קטנות.
* Bounding Boxes שנכנסים בהדרגה.
* טקסטים שמתעדכנים בתוך ה־Product Demo.

### בזמן גלילה

* Fade in.
* תנועה אנכית של 20–30 פיקסלים.
* הופעה מדורגת של כרטיסים.

### Hover

* מסגרת כחולה עדינה.
* Glow חלש.
* תנועה של 2–4 פיקסלים למעלה.

לא להשתמש באנימציות קופצניות או מהירות.

---

# 17. Responsive Design

## Desktop

* Hero בגובה קרוב למסך מלא.
* תוכן ברוחב מקסימלי של 1200–1280 פיקסלים.
* Product Demo רחב ומרכזי.

## Tablet

* כרטיסים בשתי עמודות.
* הדמו נשאר מלא ברוחב.
* הכותרת מצטמצמת.

## Mobile

* תפריט Hamburger.
* כותרת קצרה יותר.
* הכפתורים אחד מתחת לשני.
* Preview המוצר מפושט.
* כרטיסים בעמודה אחת.
* אין אנימציות כבדות.

---

# 18. קומפוננטות לפיתוח

מבנה אפשרי:

```text
src/
  components/
    Navbar/
    Hero/
    ProductPreview/
    ProblemSection/
    HowItWorks/
    Capabilities/
    UseCases/
    DemoSection/
    SecuritySection/
    CTASection/
    Footer/
    UI/
      Button/
      Badge/
      SectionTitle/
      FeatureCard/
      GlowBackground/
```

עמוד ראשי:

```tsx
<LandingPage>
  <Navbar />
  <Hero />
  <ProblemSection />
  <HowItWorks />
  <Capabilities />
  <UseCases />
  <DemoSection />
  <SecuritySection />
  <CTASection />
  <Footer />
</LandingPage>
```

---

# 19. טכנולוגיות מומלצות

בהתאם לסטאק שלך:

```text
React
TypeScript
Vite
styled-components
React Router DOM
Framer Motion
React Icons
```

לאזורי הדמו:

```text
Recharts
```

אם נרצה לייצר Video Preview אמיתי:

```text
HTML video element
Canvas overlay
```

---

# 20. גרסת MVP לדף הראשון

כדי לא להעמיס בפיתוח הראשון, הייתי מתחיל עם:

1. Navbar.
2. Hero.
3. Product Demo.
4. Problem Section.
5. How It Works.
6. Capabilities.
7. Use Cases.
8. Final CTA.
9. Footer.


כן — במקרה שלך **לבן יכול אפילו לעבוד טוב יותר**.

העיצוב הכהה משדר “AI עתידני”, אבל הוא גם עלול להיראות כמו עוד מוצר AI גנרי. רקע לבן יעביר תחושה של:

* מוצר ברור ובשל
* אמינות ופשטות
* מערכת Enterprise אמיתית
* פחות “מדע בדיוני”, יותר כלי עבודה למנהלים
* ניקיון שמאפשר לדמו של המצלמות לבלוט

הייתי הולך על **Light-first עם אזורים כהים נקודתיים**, ולא על דף לבן לחלוטין.

## הכיוון שהייתי בוחר

### רקע כללי

```css
#F7F9FC
```

לא לבן בוהק, אלא לבן־אפור עדין.

### כרטיסים

```css
#FFFFFF
```

עם גבול:

```css
#E4EAF2
```

וצל מאוד עדין.

### טקסט ראשי

```css
#0B1220
```

### טקסט משני

```css
#5F6B7A
```

### צבע מותג

```css
#1463FF
```

### Accent של Vision

```css
#00A7C4
```

כך האתר יהיה נקי וקלאסי, אבל עדיין טכנולוגי.

## איך הייתי מעצב את ה־Hero

בצד שמאל:

> **Turn Your Cameras Into Operational Intelligence**

טקסט קצר ושני כפתורים.

בצד ימין:

מסך כהה של המוצר עם פיד מצלמה, Bounding Boxes, התראות ונתונים.

זה יוצר ניגוד טוב:

```text
אתר לבן ונקי
        +
מוצר כהה, טכנולוגי ועשיר בנתונים
```


## חלוקה מומלצת בין לבן לכהה

* Navbar — לבן שקוף
* Hero — לבן או אפור בהיר
* Product preview — כהה
* Problem section — לבן
* How it works — אפור בהיר
* Use cases — לבן
* AI assistant demo — כהה
* Security — לבן
* CTA תחתון — כחול כהה

התוצאה תרגיש יותר כמו:

> Stripe / Linear / Samsara / Verkada

ופחות כמו דף נחיתה של ChatGPT wrapper.

למוצר שלך הייתי בוחר ב־**70% בהיר ו־30% כהה**. זה ישמור על הקלאסיות והאמינות, ועדיין ייתן למערכת ה־Vision תחושה מתקדמת ומרשימה.
