# מערכת התלונות האנונימית - IDF Anonymous Complaints System

## תיאור הפרויקט

מערכת התלונות האנונימית היא אפליקציית web המיועדת לאפשר לחיילים ולעובדים להגיש תלונות באופן אנונימי לחלוטין. המערכת מספקת פלטפורמה בטוחה ופרטית להעלאת בעיות ודאגות הקשורות למזון, ציוד, פיקוד או נושאים אחרים.

## תכונות עיקריות

- **הגשת תלונות אנונימית** - המשתמשים יכולים להגיש תלונות ללא צורך בזיהוי אישי
- **קטגוריזציה** - תלונות מחולקות לקטגוריות: מזון, ציוד, פיקוד ואחר
- **פאנל ניהול מוגן בסיסמה** - גישה מוגבלת למנהלים לצפייה בתלונות
- **ממשק משתמש פשוט ונגיש** - עיצוב נקי ואינטואיטיבי

## טכנולוגיות

### Backend
- **Node.js** - סביבת ריצה
- **Express.js** - פריימוורק שרת
- **Supabase** - בסיס נתונים ואחסון בענן

### Frontend
- **HTML5** - מבנה הדפים
- **CSS3** - עיצוב וסטיילינג
- **Vanilla JavaScript** - פונקציונליות צד לקוח

## מבנה הפרויקט

```
   # (ריק - עדיין לא מומש)
├── db/
│   └── dal.js                     # שכבת גישה לנתונים
├── public/
│   ├── index.html                 # דף הבית
│   ├── complaint.html             # דף הגשת התלונות
│   └── style.css                  # (ריק - עדיין לא מומש)
├── routes/
│   └── complaints.js              # נתיבי API
├── server.js                      # שרת ראשי
└── README.md                      # תיעוד הפרויקט
```

## דרישות מערכת

- Node.js (גרסה 14 ומעלה)
- npm או yarn
- חשבון Supabase

## התקנה והפעלה

### 1. שכפול הפרויקט
```bash
git clone [repository-url]
cd anonymous-complaints-system
```

### 2. התקנת dependencies
```bash
npm install
```

### 3. הגדרת משתני סביבה
צור קובץ `.env` בשורש הפרויקט:
```env
PORT=3064
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
PASSWORD=your_admin_password
```

### 4. הגדרת בסיס הנתונים
צור טבלה בשם `complaint` ב-Supabase עם העמודות הבאות:
```sql
CREATE TABLE complaint (
    id SERIAL PRIMARY KEY,
    category VARCHAR(50) NOT NULL,
    complaint TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

### 5. הפעלת השרת
```bash
npm start
```

השרת ירוץ על `http://localhost:3064`

## נתיבי API

### POST `/idf/complaint`
הגשת תלונה חדשה

**Body:**
```json
{
    "category": "food|equipment|Commands|other",
    "complaint": "תוכן התלונה"
}
```

### POST `/idf/admin`
קבלת כל התלונות (דורש סיסמה)

**Body:**
```json
{
    "password": "admin_password"
}
```

**Response:**
```json
[
    {
        "id": 1,
        "category": "food",
        "complaint": "תוכן התלונה",
        "created_at": "2024-01-01T00:00:00Z"
    }
]
```

## שימוש במערכת

### הגשת תלונה
1. גש לדף הבית (`/index.html`)
2. לחץ על "send an anonymus complaint"
3. בחר קטגוריה מהתפריט הנפתח
4. כתב את תוכן התלונה
5. לחץ "submit"

### צפייה בתלונות (מנהלים)
1. בדף הבית, הכנס את סיסמת המנהל
2. לחץ "submit"
3. התלונות יוצגו בפורמט JSON

## אבטחה ופרטיות

- **אנונימיות מלאה** - המערכת לא אוספת מידע מזהה אישי
- **הגנה בסיסמה** - גישה למנהלים מוגבלת בסיסמה
- **HTTPS מומלץ** - בסביבת ייצור יש להשתמש ב-HTTPS
- **משתני סביבה** - מידע רגיש נשמר במשתני סביבה

## פיתוח עתידי

### תכונות מתוכננות:
- [ ] עיצוב CSS מלא
- [ ] מימוש controllers
- [ ] ממשק admin משופר עם UI
- [ ] מערכת סינון ותחום התלונות
- [ ] התראות למנהלים על תלונות חדשות
- [ ] ייצוא נתונים לקבצי CSV/Excel
- [ ] מערכת דירוג חומרת התלונות
- [ ] לוג ביקורת למעקב אחר פעולות מנהלים

### שיפורים טכניים:
- [ ] validation נוסף על הנתונים
- [ ] rate limiting למניעת spam
- [ ] לוגים למעקב אחר פעילות המערכת
- [ ] בדיקות יחידה (unit tests)
- [ ] Docker containerization

## תרומה לפרויקט

1. Fork את הפרויקט
2. צור branch חדש לפיתוח (`git checkout -b feature/amazing-feature`)
3. Commit את השינויים (`git commit -m 'Add amazing feature'`)
4. Push ל-branch (`git push origin feature/amazing-feature`)
5. פתח Pull Request

## רישיון

הפרויקט מורשה תחת [רישיון MIT](LICENSE)

## תמיכה

אם נתקלת בבעיות או יש לך שאלות:
1. בדוק את הבעיות הקיימות ב-Issues
2. פתח Issue חדש עם תיאור מפורט
3. צור קשר עם צוות הפיתוח

## היסטוריית גרסאות

### גרסה 1.0.0
- מימוש בסיסי של מערכת התלונות
- פונקציונליות הגשה וצפייה בתלונות
- אינטגרציה עם Supabase
- הגנה בסיסמה למנהלים

---

**הערה חשובה:** מערכת זו מיועדת לשימוש פנימי ויש לוודא עמידה בתקנות הפרטיות והאבטחה הרלוונטיות לפני הפעלה בסביבת ייצור.
