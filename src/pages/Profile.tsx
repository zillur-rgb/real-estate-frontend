import ProfileLayout from "../components/profile/Layout";
import ListedProperties from "../components/profile/ListeProperties";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import Layout from "../components/shared/Layout";

const Profile = () => {
  return (
    <Layout>
      <ProfileLayout>
        <ProfileNavbar />
        <ListedProperties />
      </ProfileLayout>
    </Layout>
  );
};

export default Profile;
