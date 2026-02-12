# Sanity CMS – Aircraft inventory

The site can use **Sanity** as a headless CMS for the aircraft inventory. When Sanity is configured, content is edited in Sanity Studio and the site fetches it at build time. When it’s not configured, the site uses the static data in `src/data/aircraft.ts`.

---

## 1. Create a Sanity project

1. Go to [sanity.io/manage](https://www.sanity.io/manage) and sign in (or create an account).
2. Click **Create project** and name it (e.g. “US Sport Planes”).
3. Choose a dataset (e.g. **production**).
4. In **Project settings** → **API**, copy your **Project ID** and note your **Dataset** name.

---

## 2. Connect the Astro site to Sanity

1. In the **project root** (not inside `studio/`), copy the example env file:
   ```bash
   cp .env.example .env
   ```
2. Edit `.env` and set:
   ```env
   SANITY_PROJECT_ID=your-project-id
   SANITY_DATASET=production
   ```
3. Rebuild or run the site:
   ```bash
   npm run build
   # or
   npm run dev
   ```
   The site will now load aircraft from Sanity. If the dataset is empty, the Aircraft Inventory page will show no listings until you add content in the Studio.

---

## 3. Run Sanity Studio to add/edit aircraft

Sanity Studio is in the `studio/` folder. Use it to manage aircraft documents.

1. Install and run the Studio:
   ```bash
   cd studio
   npm install
   ```
2. Create a `.env` file in `studio/` (or use the root `.env`) with:
   ```env
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   ```
   Or export the same variables in your shell.
3. Start the Studio:
   ```bash
   npm run dev
   ```
4. Open the URL shown (e.g. `http://localhost:3333`), log in with your Sanity account if prompted, and open the **Aircraft** document type to add or edit listings.

---

## 4. Deploy the Studio (optional)

To give editors a permanent URL for the Studio:

1. From the `studio/` folder:
   ```bash
   npm run deploy
   ```
2. Follow the prompts to link the project and host the Studio on Sanity’s subdomain (e.g. `your-project.sanity.studio`).

---

## Summary

| Task              | Where                    | Command / action                    |
|-------------------|--------------------------|-------------------------------------|
| Create project    | sanity.io/manage         | Create project, copy Project ID    |
| Site uses Sanity  | Project root `.env`      | Set `SANITY_PROJECT_ID`, `SANITY_DATASET` |
| Edit content      | `studio/`                | `cd studio && npm install && npm run dev` |
| Deploy Studio     | `studio/`                 | `npm run deploy`                    |

If `SANITY_PROJECT_ID` and `SANITY_DATASET` are not set, the site keeps using the static aircraft data and no Studio is required.
