# Budgie Lingo 🐦💙

A soft sky-blue language learning app with a chibi budgie mascot — sign up, pick languages, learn at your own pace, and earn a certificate when you finish a course.

**Fully working languages:** French, German, Hindi, Japanese, Chinese (6 lessons each)
**Everything else** (100+ languages) shows as "Coming soon" — the code is structured so more can be added later by dropping in a new file in `data/courses/`.

## What's inside

- Sign up / log in with a real, permanently-saved account (passwords are securely hashed, never stored as plain text)
- Pick any number of languages to learn at once, switch between them anytime
- Interactive multiple-choice lessons with instant feedback
- Progress saved per language, per user
- A printable certificate with your name and the language, unlocked when you finish all lessons
- Delete your account anytime — that's the only thing that removes your data

## Step 1: Set up your free database (MongoDB Atlas)

Just like Cloudinary for your gallery, this app needs somewhere to permanently store accounts and progress — MongoDB Atlas gives you that for free.

1. Go to **https://www.mongodb.com/cloud/atlas/register** and sign up (free, no credit card)
2. When asked to create a cluster, choose the **free "M0"** option
3. Pick any cloud provider/region (default is fine), click **Create**
4. When it asks to add a database user: set a username and password — **write these down**, you'll need them
5. When it asks about network access: click **Add My Current IP Address**, then **also** add `0.0.0.0/0` (allow access from anywhere) so Render can connect too — click **Add Entry** and type `0.0.0.0/0`
6. Once the cluster is ready, click **Connect** → **Drivers** → copy the connection string, it looks like:
   ```
   mongodb+srv://yourusername:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
7. Replace `<password>` in that string with your actual database password. Add a database name right after `.net/`, like:
   ```
   mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/budgie-lingo?retryWrites=true&w=majority
   ```
   Keep this full string somewhere safe — you'll paste it into Render in Step 3.

## Step 2: Run it locally first (optional but recommended)

1. Open a terminal inside this folder
2. Run:
   ```
   npm install
   ```
3. Create a file named `.env` in this folder (same level as `server.js`) with:
   ```
   MONGO_URI=your_full_connection_string_from_step_1
   SESSION_SECRET=any_random_sentence_you_like
   ```
4. Since Node doesn't read `.env` files automatically, run it like this instead:
   ```
   node -r dotenv/config server.js
   ```
   If that gives an error about `dotenv` not being found, run `npm install dotenv` first, then try again.
5. Open **http://localhost:3000** — you should see it redirect to the sign-up page.

## Step 3: Deploy to Render (same steps as your gallery)

1. Create a **private GitHub repo** (e.g. `budgie-lingo`) and upload every file/folder in this project **except** `node_modules` (there shouldn't be a `.env` file uploaded either — keep that private!)
2. Go to **Render** → **New +** → **Web Service** → connect your repo
3. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
4. Under **Environment**, add:
   - `MONGO_URI` → your full connection string from Step 1
   - `SESSION_SECRET` → any random sentence, e.g. `budgies-are-the-best-birds-2026`
5. Click **Create Web Service** and wait for it to go Live

Your link will look like `https://budgie-lingo-xxxx.onrender.com` — share it with anyone you want to invite, they can sign up with their own account.

**Note:** unlike the photo gallery, your accounts and progress live in MongoDB Atlas (not on Render's disk), so this data is **permanent** and safe from Render restarts — no need to worry about the free-tier reset issue this time.

## Adding more languages later

To add a new language, create a file in `data/courses/` following the same pattern as `fr.js`, then:
1. Add its import to the `COURSES` object at the top of `server.js`
2. Add `'xx'` (its code) to the `AVAILABLE` array in `data/languages.js`

Happy learning! 🐦
