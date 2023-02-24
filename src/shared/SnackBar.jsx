import { Helmet } from "react-helmet-async";

export default function SnackBar({ showMsg }) {
  return (
    <>
      <Helmet>
        <style type="text/css">
          {`.showSuccessMsg{
            background-color: red;
            color:white;
            max-width: 250px;
            font-size: 16px;
            font-weight: normal;
            padding:5px;
            border-radius: 5px;
            position: fixed;
            top:100px;
            transition: .3s;
          }
          .dark .showSuccessMsg{
            background-color:white;
            color:teal;
          }
          .bi-check{
            color:teal;
            font-size:20px
          }`}
      </style>
      </Helmet>
      <p
        style={{ right: showMsg ? "20px" : "-100vw" }}
        className="showSuccessMsg"
      >
        tasks added successfully <i className="bi bi-check"></i>
      </p>
    </>
  );
}