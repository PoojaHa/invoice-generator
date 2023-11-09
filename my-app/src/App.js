import "./App.css";
import Footer from "./Components/Footer";
import Table from "./Components/Table";
import Header from "./Components/Header";
import MainDetails from "./Components/MainDetails";
import ClientDetails from "./Components/ClientDetails";
import Dates from "./Components/Dates";
import { useRef, useState } from "react";
import NotesComponent from "./Components/Notes";
import Tablleform from "./Components/Tablleform";
import ReactToPrint from "react-to-print";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [Name, SetName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankname, setbankname] = useState("");
  const [bankAccount, setBankaccount] = useState("");
  const [website, setwebsite] = useState("");
  const [ClientName, setClientname] = useState("");
  const [ClientAddress, setClientAddress] = useState("");
  const [InvoiceNumber, setInvoiceNumber] = useState("");
  const [InvoiceDate, setInvoiceDate] = useState("");
  const [Duedates, setDuedates] = useState("");
  const [Notes, setNotes] = useState("");
  const [Description, setDescription] = useState("");
  const [Quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [Amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState("");

  const handlePrint = () => {
    window.print();
  };
  const hadledwnload = () => {
    const input = document.getElementById("table-to-pdf"); // Element to be converted to PDF

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("table.pdf");
    });
  };
  const componentRef = useRef();
  return (
    <main className="p-5 m-5 lg:max-w-xl lg:mx-auto md:max-w-4xl md:mx-auto bg-white xl:max-w-4xl xl:mx-auto rounded shadow ">
      <ReactToPrint
        trigger={() => (
          <button
            className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500
               hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5 mb-5"
          >
            Print
          </button>
        )}
        content={() => componentRef.current}
      />
      <button
        className="bg-green-500 py-2 px-8 rounded shadow border-2 border-blue-500
               hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5 mb-5 mx-4"
        onClick={hadledwnload}
      >
        Download
      </button>
      {showInvoice ? (
        <>
          <div ref={componentRef} className="p-5" id="table-to-pdf">
            <Header handlePrint={handlePrint} />
            <MainDetails Name={Name} address={address} />
            <ClientDetails
              ClientName={ClientName}
              ClientAddress={ClientAddress}
            />

            <Dates
              InvoiceNumber={InvoiceNumber}
              InvoiceDate={InvoiceDate}
              Duedates={Duedates}
            />
            <Table
              Description={Description}
              Quantity={Quantity}
              price={price}
              Amount={Amount}
              list={list}
              total={total}
              setTotal={setTotal}
            />
            <NotesComponent Notes={Notes} />
            <Footer
              Name={Name}
              address={address}
              phone={phone}
              email={email}
              bankname={bankname}
              bankAccount={bankAccount}
              website={website}
            />
          </div>
          <button
            className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500
             hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-5"
            onClick={() => setShowInvoice(false)}
          >
            Edit Information
          </button>
        </>
      ) : (
        <div className="flex flex-col  justify-center">
          <article className="md:grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label htmlFor="Enter your name">Enter your Name</label>
              <input
                type="text"
                id="Name"
                name="Name"
                value={Name}
                autoComplete="off"
                placeholder="Enter Your Name"
                onChange={(e) => SetName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your address">Enter your Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={address}
                autoComplete="off"
                placeholder="Enter Your address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </article>

          <article className="md:grid grid-cols-3 gap-10">
            <div className="flex flex-col">
              <label htmlFor="enter your email">Enter your Email</label>
              <input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your phone">Enter your Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                autoComplete="off"
                placeholder="Enter Your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your bankname">Enter your Bankname</label>
              <input
                type="text"
                id="bankname"
                name="bankname"
                autoComplete="off"
                placeholder="Enter Your Bankname"
                value={bankname}
                onChange={(e) => setbankname(e.target.value)}
              />
            </div>
          </article>

          <article className="md:grid grid-cols-2 gap-10 mt-9">
            <div className="flex flex-col">
              <label htmlFor="enter your bankAccount">
                Enter your BankAccount
              </label>
              <input
                type="text"
                id="bankAccount"
                name="bankAccount"
                autoComplete="off"
                placeholder="Enter Your bankAccount"
                value={bankAccount}
                onChange={(e) => setBankaccount(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your website">Enter your Website</label>
              <input
                type="text"
                id="website"
                name="website"
                autoComplete="off"
                placeholder="Enter Your website"
                value={website}
                onChange={(e) => setwebsite(e.target.value)}
              />
            </div>
          </article>

          <article className="grid grid-cols-2 gap-10 md:mt-13">
            <div className="flex flex-col">
              <label htmlFor="enter your ClientName">
                Enter your ClientName
              </label>
              <input
                type="text"
                id="ClientName"
                name="ClientName"
                autoComplete="off"
                placeholder="Enter Your ClientName"
                value={ClientName}
                onChange={(e) => setClientname(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your ClientAddress">
                Enter your ClientAddress
              </label>
              <input
                type="text"
                id="ClientAddress"
                name="ClientAddress"
                autoComplete="off"
                placeholder="Enter Your ClientAddress"
                value={ClientAddress}
                onChange={(e) => setClientAddress(e.target.value)}
              />
            </div>
          </article>

          <article className="grid grid-cols-3 gap-10 md:mt-15">
            <div className="flex flex-col">
              <label htmlFor="enter your InvoiceNumber">
                Enter your InvoiceNumber
              </label>
              <input
                type="text"
                id="InvoiceNumber"
                name="InvoiceNumber"
                autoComplete="off"
                placeholder="Enter Your InvoiceNumber"
                value={InvoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your InvoiceDate">
                Enter your InvoiceDate
              </label>
              <input
                type="date"
                id="InvoiceDate"
                name="InvoiceDate"
                autoComplete="off"
                placeholder="Enter Your InvoiceDate"
                value={InvoiceDate}
                onChange={(e) => setInvoiceDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="enter your dueDate">Enter your DueDate</label>
              <input
                type="date"
                id="dueDate"
                name="dueDate"
                autoComplete="off"
                placeholder="Enter Your dueDate"
                value={Duedates}
                onChange={(e) => setDuedates(e.target.value)}
              />
            </div>
          </article>
          <article>
            <Tablleform
              Description={Description}
              setDescription={setDescription}
              setQuantity={setQuantity}
              Quantity={Quantity}
              setPrice={setPrice}
              price={price}
              Amount={Amount}
              setAmount={setAmount}
              list={list}
              setList={setList}
              total={total}
              setTotal={setTotal}
            />
          </article>
          <label htmlFor="enter your textArea">Enter your Notes</label>
          <textarea
            name="notes"
            cols={10}
            rows={10}
            placeholder="Short Note"
            onChange={(e) => setNotes(e.target.value)}
            value={Notes}
          >
            {" "}
          </textarea>

          <button
            onClick={() => setShowInvoice(true)}
            className="bg-blue-500 py-2 px-8 rounded shadow border-2 border-blue-500
             hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            Preview Invoice
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
