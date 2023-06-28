import Layout from "../components/shared/Layout";
import ProfileLayout from "../components/profile/Layout";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import AllYachts from "../components/profile/AllYachts";

const ListedYachts = () => {
  return (
    <Layout>
      <ProfileLayout>
        <ProfileNavbar />
        <AllYachts />
      </ProfileLayout>
    </Layout>
  );
};

export default ListedYachts;
