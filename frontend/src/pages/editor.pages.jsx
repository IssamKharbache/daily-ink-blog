import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import PublishForm from "../components/publish-form.component";
import BlogEditor from "../components/editor/blog-editor.component";

const EditorPage = () => {
  const [editor, setEditor] = useState("editor");
  const {
    userAuth: { access_token },
  } = useContext(UserContext);
  if (access_token === null) {
    return <Navigate to="/sign-in" />;
  }
  return editor == "editor" ? <BlogEditor /> : <PublishForm />;
};
export default EditorPage;
