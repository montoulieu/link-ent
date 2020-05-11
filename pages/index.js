import Layout from "../components/Layout";
import LinkList from "../components/LinkList"

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <LinkList />
      </div>
    </Layout>
  );
}

export default IndexPage;
