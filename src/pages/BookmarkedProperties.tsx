import Layout from "../components/shared/Layout";
import ProfileLayout from "../components/profile/Layout";
import ProfileNavbar from "../components/profile/ProfileNavbar";
import BookmarkedPropertiesComponent from "../components/profile/BookmarkedProeprties";

const BookmarkedProperties = () => {
  return (
    <Layout>
      <ProfileLayout>
        <ProfileNavbar />
        <BookmarkedPropertiesComponent />
      </ProfileLayout>
    </Layout>
  );
};

export default BookmarkedProperties;
