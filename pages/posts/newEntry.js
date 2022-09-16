import Head from "next/head";
import Layout from "../../components/layout";

export default function NewEntry() {
  return (
    <Layout>
      <Head>
        <title>New Entry</title>
      </Head>
      <div>
        <h1>Create Blog Post</h1>

        <form>
          <div>
            <label htmlFor="title">Title: </label>
            <input name="title" />
          </div>

          <div>
            <label htmlFor="Details">Details: </label>
            <input name="Details" />
          </div>

          <div>
            <button type="submit">Publish</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
