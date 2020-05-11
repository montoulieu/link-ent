import Header from "./Header";
import LinkList from "./LinkList"
import Footer from "./Footer";
import Head from 'next/head'


function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* FontAwesome CDN style tag */}
      <Head>
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
      </Head>

      {/* Profile Pic and Title Header*/}
      <Header />

      {/* List of Links generated from links.json */}
      <LinkList />

      {/* Social Links and Footer Disclaimer/Credits */}
      <Footer />
    </div>
  );
}

export default Layout;
