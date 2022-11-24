
import React, { useRef, useEffect, useState } from "react";
import Link from "next/link"; 
import Head from 'next/head'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,FreeMode } from "swiper";
import ModalVideo from 'react-modal-video'

const BusinessCentral = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);

    return (
        <>
        <Head>
        <title>
        Dynamics 365 Business Central Partner | Dynamics Square
        </title>
        <meta
          name="description"
          content="Automate and manage your end-to-end business processes seamlessly with Dynamics 365 Business Central - A unified business management solution for small business."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.ca/products/dynamics-365-business-central/"
        />
        </Head>
         <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="yCJ7C1KS-Jw"
        onClose={() => setOpen(false)}
      /> 
        <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 align-self-center">
              <h1>
              Microsoft Dynamics 365 Business Central
              </h1>
              <p>An all-in-one Business App that streamlines and smoothly connects and manages operations across your small or medium-sized business's finances, manufacturing, supply chain, and operational processes.</p>
              <div>
                <div className="text-center text-lg-start">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Schedule a Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <img
                src="/img/Dynamics-365-Business-Central.png"
                alt="Dynamics 365 Business Central"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
            <header className="section-header">
            <h2>
              What is Dynamics 365 Business Central?
            </h2>
            <p>
            Dynamics 365 Business Central or simply, Business Central is an all-in-one ERP software. Microsoft developed it to help SMBs and subsidiaries of large international groups to advance their growth, drive sustainability, and improve results.<br /><br />With Business Central, enterprises can effectively manage and optimize their sales, finance, services, operations, human resources, and other departments. D365 Business Central is an excellent fit for organizations seeking help in automating, accelerating, and simplifying their business processes to ensure maximized revenue outcomes and scalability.
            </p>
          </header>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
        <header className="section-header">
            <h2>
            Capabilities of  <br /> D365 Business Central 
            </h2>
          </header>
          </div></div>
          <div className="row d-lg-none">
           <div className="col-lg-12">
           <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Finance</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                            <p>Streamline and customize internal company transactions with restricted access.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cash flow Forecasting</h4>
                        <p>Forecast future sales and expenses based on cash balances and account schedules.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Budgeting</h4>
                        <p>In addition to budgeting, monitor and manage the company's overall financial activities.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Inventory Costing</h4>
                        <p>The general ledger serves as the means of managing inventory and manufacturing costs and reconciling them.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Consolidation and Multi-Companies</h4>
                        <p>It is possible to perform a financial analysis of the company using a combination of multiple general ledgers.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Costs and Income Allocation</h4>
                        <p>Organize the entries from one general journal into different accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Banking</h4>
                        <p>With seamless banking integration, it settles bank accounts and funds transfers between accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cost Accounting</h4>
                        <p>To analyze results, divide the budget between actual and planned costs for operations and projects.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Fixed Assets</h4>
                        <p>D365 Business Central provides total control over fixed assets and guarantees prompt reduction.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Receivable</h4>
                        <p>Receives payments, settle bank accounts and collects the remaining balance.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Payable</h4>
                        <p>Make payments, mark outgoing payments, and manage cheques with D365 BC.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>General Ledger</h4>
                        <p>Manage the credit and debit entries to maintain the entire financial data.</p>
                            </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Sales</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Customer management</h4>
                            <p>Manage your clients' queries and interactions with you.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Quote</h4>
                        <p>Provide the client with sales quote so that they can negotiate before creating the actual invoice.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales order</h4>
                        <p>Help you provide with drop-shipping and partial-shipping features to control the creation of sales orders.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Invoices</h4>
                        <p>It generates a sales invoice for the actual purchases that the buyers actually process.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Drop Shipments</h4>
                        <p>It generates a sales invoice for the actual purchases that the buyers actually process.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Returns</h4>
                        <p>Assist the sales team to manage the information/data on the sales invoices for the returned products to release the refund amount.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Assembly Order</h4>
                        <p>If a product is not available, you can easily create linked assembly orders to fulfill the entire or part of the order.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Order Planning & Promising</h4>
                        <p>By analyzing the dates that are able to or are available to be promised, customers are informed about the delivery dates for their orders.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Single invoice Multiple Shipments</h4>
                        <p>Helps you create a single invoice for a customer after combining multiple shipments.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Correction or Cancel Unpaid Invoices</h4>
                        <p>Creates sales invoices for corrections in unpaid invoices automatically.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Pick List Creation</h4>
                        <p>Users are given the option to create a list of vendors from which to pick up shipments.</p>
                            </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Purchase</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Management</h4>
                          <p>A vendor card is made for each vendor to keep track of all purchases.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Quote</h4>
                          <p>Request purchase quotes from the supplier, then turn those requests into purchase orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Order</h4>
                          <p>D365 Business Central helps you manage all the purchase orders concerning the list of vendors.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Invoices</h4>
                          <p>Assist in overseeing the management of all vendor data and purchase invoices for terms-based purchases.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Items for Sales</h4>
                          <p>Business Central allows you to create a single invoice for multiple purchase invoices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Returns</h4>
                          <p>Produces invoices for the vendor that detail the returned goods and the amount reimbursed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Combine Receipts on Single Invoice</h4>
                          <p>D365 Business Central helps you merge various invoices from the same vendor into one.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Electronic Documents</h4>
                          <p>All electronic invoices are managed and converted into vendor purchase invoices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Date Calculation for Purchase</h4>
                          <p>It displays information about goods that must be received on or before particular dates.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>It eliminates all confusion by merging all the redundant records.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Inventory Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Master Management</h4>
                          <p>Helps you produce the goods or product cards that a company trades.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials</h4>
                          <p>Creates the parent item's structure or data in order to stock component kit versions of the parent item for sale.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization</h4>
                          <p>Maintains a broad overview while categorizing the items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes</h4>
                          <p>To make it simple to find a particular item, give the attributes to the various items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog</h4>
                          <p>Develops a special item card that a business provides to its clients without any stock.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting</h4>
                          <p>Successfully maintains a real-time inventory count.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>Controls item availability according to location, time, sales event, use during assembly, and production BOMs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer</h4>
                          <p>Oversees the management of all transfer orders for moving inventory items between locations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation</h4>
                          <p>For sales, service, purchase, assembly, and production orders, set aside a few products from your inventory.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking</h4>
                          <p>Provides assistance to the user in tracking items using a serial number or lot number in the event of a recall situation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Block Items</h4>
                          <p>Prevents some items from entering the buying or selling queues or participating in any transaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>Warehouse Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving</h4>
                          <p>Organizes the information about the purchase order as well as the record of all item receipts at the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments</h4>
                          <p>Oversees the sales order information as well as the record of shipped goods at the warehouse location.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cross Dock Items</h4>
                          <p>Bypass, pick, and place expedited items in inventory for shipping.In order to ship expedited items, bypass, pick, and add them to inventory.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away</h4>
                          <p>Determines the appropriate classification for the items received from the various resources according to the warehouse process set up.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items</h4>
                          <p>Enables the company to move items between different warehouse locations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items</h4>
                          <p>Selects the items for various uses in accordance with the data configured in the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS)</h4>
                          <p>Utilize the barcode scanning feature to keep tabs on the movement of items inside the warehouse.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Project Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Creation</h4>
                          <p>The organization can assign jobs, plan projects, and create and manage projects with the help of Dynamics 365 Business Central.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                          <p>Distribute resources with price management to various tasks before each project is launched.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management</h4>
                          <p>Assembles the timesheet with the job tasks, the planning lines, and the timesheet lines, and updates the timesheet lines to the job journal.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management</h4>
                          <p>Examine and contrast how the budget is allocated among the various projects to determine their effectiveness, cost, and quality.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions</h4>
                          <p>Maintains a log of all consumption based on different jobs and updates the information in real time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies</h4>
                          <p>Oversees the acquisition of all materials required for a project's completion and keeps track of both the work product and the time devoted to it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods</h4>
                          <p>With the aid of this feature, accurate financial statement creation can be ensured, and jobs can be financially estimated.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance</h4>
                          <p>It controls accurate financial reporting and the monetary value of materials used in a job after they have been consumed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                          <p>When a specific project is finished, send the customer the invoice, or schedule it as needed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>Removes the duplicate records for the same vendors in order to reduce confusion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <span>Manufacturing</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                      <div className="row busines-service-list-pad">
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                          <p>With Business Central you can easily plan, suggest, and balance demands and supply chain.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                          <p>Business Central provides you with flexibility to adjust its algorithms so that you can meet distribution, manufacturing, and procurement operations in-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Demand Forecasting</h4>
                          <p>D365 Business Central helps your company with demand forecasts, capacity constraints, and material availability to boost sales and production.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                          <p>Ensures that production orders are being placed in accordance with the exact requirements of the sales orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                          <p>With Business Central, you can manually plan for sales and product demand. However, one BOM (Bill of Material) level at a time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                          <p>In Business Central, users can use the planning worksheet to automate the supply chain by MRP (Materials Requirements Planning) and MPS (Master Production Schedule) options.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                          <p>Creates data automatically about the supply chain and mentions the demand for refilled items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                          <p>Whenever there is a sudden change in planning, D365 Business Central reschedules the work center calendar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>You can obtain information about the availability and influence of a specific item.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                          <p>Create production orders manually or automatically with D365 Business Central in effortless ways.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                          <p>D365 Business Central helps decision makers to outsource the selected processes or operations to a subcontractor.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                          <p>With Business Central, the output of the single production line, along with its material and time consumption, can be recorded for future reference.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           </div>
          </div>


          <div className="row busines-bg g-0">
            <div className="col-lg-3 no-pad">
              <div className="nav flex-column nav-pills bus-ser-left" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <div className="nav-link active" id="v-pills-Finance-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Finance"  role="tab" aria-controls="v-pills-Finance" aria-selected="true"><h3>Finance</h3></div>
                  <div className="nav-link" id="v-pills-Sales-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Sales"  role="tab" aria-controls="v-pills-Sales" aria-selected="false"><h3>Sales</h3></div>
                  <div className="nav-link" id="v-pills-Purchase-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Purchase"  role="tab" aria-controls="v-pills-Purchase" aria-selected="false"><h3>Purchase</h3></div>
                  <div className="nav-link" id="v-pills-Management-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Management"  role="tab" aria-controls="v-pills-Management" aria-selected="false"><h3>Inventory Management</h3></div>
                  <div className="nav-link" id="v-pills-Inventory-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Inventory"  role="tab" aria-controls="v-pills-Inventory" aria-selected="false"><h3>Warehouse Management</h3></div>
                  <div className="nav-link" id="v-pills-Project-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Project"  role="tab" aria-controls="v-pills-Project" aria-selected="false"><h3>Project Management</h3></div>
                  <div className="nav-link" id="v-pills-Manufacturing-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Manufacturing"  role="tab" aria-controls="v-pills-Manufacturing" aria-selected="false"><h3>Manufacturing</h3></div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-Finance" role="tabpanel" aria-labelledby="v-pills-Finance-tab" >
                  
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Internal Transactions</h4>
                            <p>Streamline and customize internal company transactions with restricted access.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cash flow Forecasting</h4>
                        <p>Forecast future sales and expenses based on cash balances and account schedules.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Budgeting</h4>
                        <p>In addition to budgeting, monitor and manage the company's overall financial activities.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Inventory Costing</h4>
                        <p>The general ledger serves as the means of managing inventory and manufacturing costs and reconciling them.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Consolidation and Multi-Companies</h4>
                        <p>It is possible to perform a financial analysis of the company using a combination of multiple general ledgers.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Costs and Income Allocation</h4>
                        <p>Organize the entries from one general journal into different accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Banking</h4>
                        <p>With seamless banking integration, it settles bank accounts and funds transfers between accounts.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Cost Accounting</h4>
                        <p>To analyze results, divide the budget between actual and planned costs for operations and projects.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Fixed Assets</h4>
                        <p>D365 Business Central provides total control over fixed assets and guarantees prompt reduction.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Receivable</h4>
                        <p>Receives payments, settle bank accounts and collects the remaining balance.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Accounts Payable</h4>
                        <p>Make payments, mark outgoing payments, and manage cheques with D365 BC.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>General Ledger</h4>
                        <p>Manage the credit and debit entries to maintain the entire financial data.</p>
                            </div>
                      </div>
                    </div>
                  </div>



                </div>
                <div className="tab-pane fade" id="v-pills-Sales" role="tabpanel" aria-labelledby="v-pills-Sales-tab" >
                  
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Customer management</h4>
                            <p>Manage your clients' queries and interactions with you.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Quote</h4>
                        <p>Provide the client with sales quote so that they can negotiate before creating the actual invoice.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales order</h4>
                        <p>Help you provide with drop-shipping and partial-shipping features to control the creation of sales orders.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Invoices</h4>
                        <p>It generates a sales invoice for the actual purchases that the buyers actually process.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Drop Shipments</h4>
                        <p>Helps you oversee the purchase order so that goods can be shipped straight from the vendor to the customer.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Sales Returns</h4>
                        <p>Assist the sales team to manage the information/data on the sales invoices for the returned products to release the refund amount.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Assembly Order</h4>
                        <p>If a product is not available, you can easily create linked assembly orders to fulfill the entire or part of the order.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Order Planning & Promising</h4>
                        <p>By analyzing the dates that are able to or are available to be promised, customers are informed about the delivery dates for their orders.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Single invoice Multiple Shipments</h4>
                        <p>Helps you create a single invoice for a customer after combining multiple shipments.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Correction or Cancel Unpaid Invoices</h4>
                        <p>Creates sales invoices for corrections in unpaid invoices automatically.</p>
                            </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                      <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                        <h4>Pick List Creation</h4>
                        <p>Users are given the option to create a list of vendors from which to pick up shipments.</p>
                            </div>
                      </div>
                    </div>
                  </div>


                </div>
                <div className="tab-pane fade" id="v-pills-Purchase" role="tabpanel" aria-labelledby="v-pills-Purchase-tab" >
                  <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Vendor Management</h4>
                          <p>A vendor card is made for each vendor to keep track of all purchases.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Quote</h4>
                          <p>Request purchase quotes from the supplier, then turn those requests into purchase orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Order</h4>
                          <p>D365 Business Central helps you manage all the purchase orders concerning the list of vendors.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Invoices</h4>
                          <p>Assist in overseeing the management of all vendor data and purchase invoices for terms-based purchases.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Items for Sales</h4>
                          <p>Business Central allows you to create a single invoice for multiple purchase invoices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Purchase Returns</h4>
                          <p>Produces invoices for the vendor that detail the returned goods and the amount reimbursed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Combine Receipts on Single Invoice</h4>
                          <p>D365 Business Central helps you merge various invoices from the same vendor into one.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Electronic Documents</h4>
                          <p>All electronic invoices are managed and converted into vendor purchase invoices.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Date Calculation for Purchase</h4>
                          <p>It displays information about goods that must be received on or before particular dates.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>It eliminates all confusion by merging all the redundant records.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Management" role="tabpanel" aria-labelledby="v-pills-Management-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Master Management</h4>
                          <p>Helps you produce the goods or product cards that a company trades.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Bill of Materials</h4>
                          <p>Creates the parent item's structure or data in order to stock component kit versions of the parent item for sale.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Categorization</h4>
                          <p>Maintains a broad overview while categorizing the items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Attributes</h4>
                          <p>To make it simple to find a particular item, give the attributes to the various items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Catalog</h4>
                          <p>Develops a special item card that a business provides to its clients without any stock.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Counting</h4>
                          <p>Successfully maintains a real-time inventory count.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>Controls item availability according to location, time, sales event, use during assembly, and production BOMs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Inventory Transfer</h4>
                          <p>Oversees the management of all transfer orders for moving inventory items between locations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Reservation</h4>
                          <p>For sales, service, purchase, assembly, and production orders, set aside a few products from your inventory.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Tracking</h4>
                          <p>Provides assistance to the user in tracking items using a serial number or lot number in the event of a recall situation.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Block Items</h4>
                          <p>Prevents some items from entering the buying or selling queues or participating in any transaction.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Inventory" role="tabpanel" aria-labelledby="v-pills-Inventory-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Receiving</h4>
                          <p>Organizes the information about the purchase order as well as the record of all item receipts at the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Shipments</h4>
                          <p>Oversees the sales order information as well as the record of shipped goods at the warehouse location.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Cross Dock Items</h4>
                          <p>Bypass, pick, and place expedited items in inventory for shipping.In order to ship expedited items, bypass, pick, and add them to inventory.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Putting Items Away</h4>
                          <p>Determines the appropriate classification for the items received from the various resources according to the warehouse process set up.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Moving Items</h4>
                          <p>Enables the company to move items between different warehouse locations.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Picking Items</h4>
                          <p>Selects the items for various uses in accordance with the data configured in the warehouse.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Automated Data Capture Systems (ADCS)</h4>
                          <p>Utilize the barcode scanning feature to keep tabs on the movement of items inside the warehouse.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Project" role="tabpanel" aria-labelledby="v-pills-Project-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Creation</h4>
                          <p>The organization can assign jobs, plan projects, and create and manage projects with the help of Dynamics 365 Business Central.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Allocations</h4>
                          <p>Distribute resources with price management to various tasks before each project is launched.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Time Sheet Management</h4>
                          <p>Assembles the timesheet with the job tasks, the planning lines, and the timesheet lines, and updates the timesheet lines to the job journal.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Budget Management</h4>
                          <p>Examine and contrast how the budget is allocated among the various projects to determine their effectiveness, cost, and quality.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Resource Consumptions</h4>
                          <p>Maintains a log of all consumption based on different jobs and updates the information in real time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Supplies</h4>
                          <p>Oversees the acquisition of all materials required for a project's completion and keeps track of both the work product and the time devoted to it.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project WIP Methods</h4>
                          <p>With the aid of this feature, accurate financial statement creation can be ensured, and jobs can be financially estimated.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Progress and Performance</h4>
                          <p>It controls accurate financial reporting and the monetary value of materials used in a job after they have been consumed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Project Invoicing</h4>
                          <p>When a specific project is finished, send the customer the invoice, or schedule it as needed.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Merge Duplicate Records</h4>
                          <p>Removes the duplicate records for the same vendors in order to reduce confusion.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="v-pills-Manufacturing" role="tabpanel" aria-labelledby="v-pills-Manufacturing-tab" >
                <div className="row busines-service-list-pad">
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Planning</h4>
                          <p>With Business Central you can easily plan, suggest, and balance demands and supply chain.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Supply Planning</h4>
                          <p>Business Central provides you with flexibility to adjust its algorithms so that you can meet distribution, manufacturing, and procurement operations in-time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Demand Forecasting</h4>
                          <p>D365 Business Central helps your company with demand forecasts, capacity constraints, and material availability to boost sales and production. </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Creation of Production Order from Sales Order</h4>
                          <p>Ensures that production orders are being placed in accordance with the exact requirements of the sales orders.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Order Planning</h4>
                          <p>With Business Central, you can manually plan for sales and product demand. However, one BOM (Bill of Material) level at a time.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>MRP & MPS</h4>
                          <p>In Business Central, users can use the planning worksheet to automate the supply chain by MRP (Materials Requirements Planning) and MPS (Master Production Schedule) options.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Requisition Worksheet</h4>
                          <p>Creates data automatically about the supply chain and mentions the demand for refilled items.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Calculate Work Centre Calendar</h4>
                          <p>Whenever there is a sudden change in planning, D365 Business Central reschedules the work center calendar.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Item Availablity</h4>
                          <p>You can obtain information about the availability and influence of a specific item.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Order</h4>
                          <p>Create production orders manually or automatically with D365 Business Central in effortless ways.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Subcontracting</h4>
                          <p>D365 Business Central helps decision makers to outsource the selected processes or operations to a subcontractor.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="busines-service-list">
                        <div className="icons">
                          <i className="bi bi-check-lg"></i>
                        </div>
                        <div className="content">
                          <h4>Production Consumption & Output</h4>
                          <p>With Business Central, the output of the single production line, along with its material and time consumption, can be recorded for future reference.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>
      </section>
      

      <section className="Solution-business-why">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 align-self-center">
              <div className="wy-sultion-left-head">
                <h2>
                  Microsoft Dynamics 365 <br />
                  Business Central Features
                </h2>
                <h3>
                Explore Why Moving to Business Central is Profitable for Your Business.
                </h3>
              </div>
              <div className="m-o-t m-o-t-b">
                <a
                  href="/dynamics-365-business-central-features/"
                  className="btn-get-started scrollto"
                >
                  <span>Read More Features </span>
                </a>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="row gx-4">
                <div className="col-lg-6 col-md-6">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      More Comprehensive <br />
                      Business Approach
                      </h3>
                      <div className="overlay">
                        <p>With <Link href="microsoft-power-bi"><a>Power BI</a></Link> Automate, Power Apps, Power Virtual Agents, and Dataverse, Business Central is a comprehensive business application that helps you make better decisions on time through its intelligence.</p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Excellent Customer
                        <br />Experience
                      </h3>
                      <div className="overlay">
                        <p>The UI design elements & data-driven approach provides enhanced user experience (UX) across desktop & mobile devices, helping your sales teams to delight their customers, engage and target potential users in real-time from anywhere.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 top-m">
                  <div className="why-solution-wrapper">
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Robust Analytics
                        <br />
                        & Simplified Reporting
                      </h3>
                      <div className="overlay">
                        <p>
                        Integrate Business Central with Power BI for invoking inbuilt reporting and analytics capabilities, enabling your workforce to make instant yet productive and market-disrupting decisions.
                        </p>
                      </div>
                    </div>
                    <div className="why-solution-wrapper-inner">
                      <h3>
                      Integration 
                        <br />& Customization
                      </h3>
                      <div className="overlay">
                        <p>
                        D365 Business Central favors easy-to-customize capabilities, helping you address specific business needs. Small or small-to-mid market size  businesses can integrate Business Central with their existing systems and other Microsoft Business Apps.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-n">
        <div className="container">
          <div className="swiper solution_new_callto">
            <div className="swiper-wrapper">
              <Swiper
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, FreeMode, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-8 align-self-center">
                        <div className="call_to_action-left">
                          <h3>Switch to Business Central From Dynamics NAV</h3>
                          <p>
                          Are you dissatisfied with your current Dynamics NAV ERP system? Try Business Central and make an upgrade today. Dynamics Square will make sure you look no further.
                          </p>
                          <div className="new-btn new-btn-nn">
                            <a
                              href="/dynamics-nav-to-business-central/"
                              className="btn-get-started-color"
                            >
                              <span>Learn More</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 align-self-center">
                        <div className="call_to_action-right">
                          <img
                            src="/img/Group-683.png"
                            alt="microsft dynamics Nav"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

               
              </Swiper>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left">
                <div className="busine_service_bottom-right">
                  <img
                    src="/img/bisin_leftimg.jpg"
                    className="fix-im"
                    alt="Business Central Services"
                  />
                  <div className="video-ytube video-ytubes">
                    <div className="popup-btn popup-btns">
                      <a
                        href="#javascript:void(0)"
                        onClick={() => setOpen(true)}
                      >
                        <img
                          src="/img/Video-Business Central.png"
                          alt="Video Business Central"
                        />
                        <span className="cente-icns">
                          <img
                            src="/img/play_icons.svg"
                            alt="play_icons"
                          />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading">
                <h2>Business Central Services</h2>
                <p>Any device, anywhere - deployment of Microsoft D365 Business Central is possible.</p>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Implementation-icons.svg"
                    alt="Business-Central-Implementation-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>
                    Business Central Implementation
                  </h3>
                  <p>Implement Business Central to enhance your business processes and support your business with its continued growth.</p>
                  <div className="action-content">
                    <a href="/dynamics-365-business-central-implementation/">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business Central Upgrade-icons.svg"
                    alt="Business Central Upgrade-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>
                    Business Central Upgrade
                  </h3>
                  <p>Upgrade your legacy ERP systems and empower your organization with new capabilities and find out the hidden potential in your business.</p>
                  <div className="action-content">
                    <a href="/dynamics-365-business-central-upgrade/">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div className="busine_service_bottom-right">
                <div className="card_new_img">
                  <img
                    src="/img/Business-Central-Support-icons.svg"
                    alt="Business-Central-Support-icons"
                  />
                </div>
                <div className="card_new_content">
                  <h3>
                    Business Central Support
                  </h3>
                  <p>The 24-hour/7-day, 365-day support system we provide ensures that your business grows at its peak.</p>
                  <div className="action-content">
                    <a href="/dynamics-365-business-central-support/">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="pricing" className="pricing">
        <div className="container">
          <header className="section-header">
            <h2>Dynamics 365 Business Central Pricing & Licensing</h2>
            <p>Take a look at D365 Business Central Pricing for Team Members, Essentials & Premium Plans</p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Essentials
                </h3>
                <div className="price">
                  <sup>$</sup>70<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Premium
                </h3>
                <div className="price">
                  <sup>$</sup>100<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Financial Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Inventory Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Sales Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Purchase Order Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Project Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Service Management
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Manufacturing
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Additional Capabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box">
                <h3>
                  Dynamics 365 Business Central
                  <br />
                  Team Members
                </h3>
                <div className="price">
                  <sup>$</sup>8<span>Per-User/Per Month</span>
                </div>
                <ul>
                  <li>
                    <i className="bi bi-check-lg"></i>Read and Approve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Employee Self Serve
                  </li>
                  <li>
                    <i className="bi bi-check-lg"></i>Run All Reports
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <a
                  data-bs-toggle="modal"
                  href="#exampleModal"
                  className="btn-get-red"
                >
                  <span>Get Started Now</span>
                </a>
                <a
                  href="/assets/pdf/Dynamics-365-Licensing-Guide-June-2022.pdf"
                  className="btn-get-whit"
                  target="_blank"
                  rel=""
                >
                  <span>See Licensing Guide</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Dynamics 365 Business Central Implementation</h3>
                <p>Translate data into meaningful insights, maximize your business potential, and overcome business challenges with Dynamics 365 Business Central implementation.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <a
                    data-bs-toggle="modal"
                    href="#exampleModal"
                    className="btn-get-started scrollto"
                  >
                    <span>Learn More The About Implementation Process </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq">
        <div className="container">
          <header className="section-header">
            <h2>
              Have you got
              <br />
              questions about Business Central?
            </h2>
            <p>Click through to our FAQ for the best answers!</p>
          </header>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Business Central - an international enterprise resource planning (ERP) system from Microsoft Dynamics 365 product family. It is a complete business management solution for startups, small and mid-sized businesses (SMBs), and subsidiaries of large international groups.</p>
                      <p>Organizations can streamline, automate, and manage business processes such as finance, manufacturing, customer relationship management, supply chains, analytics and e-Commerce operations using both its versions - an online hosted (SaaS) version or a cloud version and an on-premises version for manual deployment and administration.</p>
                      <p><b>Features that make business central one of the best ERP software systems available today:</b></p>
                      <ul>
                        <li>Simple and flexible to use.</li>
                        <li>Integration with other online Microsoft services and business apps - available in its online edition only.</li>
                        <li>Availability of 24 official localizations for various countries and 47 additional localizations from local partners.</li>
                        <li>Business Central comprises Microsoft Excel to help users start leveraging its capabilities for more connected and collaborated experiences.</li>
                        <li>Ability to help organizations manage their end-to-end process flows - from finance and supply chain to warehousing to sales to reporting & analytics, and more.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      How is Business Central related to Dynamics NAV?
                    </button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                   <p>Dynamics 365 Business Central is an enhanced version of Dynamics NAV (better known as Navision). The Core functionalities of Business Central are like NAV. The difference lies in advanced features and navigations available with Business Central. D365 Business Central is designed to support today's and tomorrow's enterprises from various industries. Existing Dynamics NAV users can avail of support services but not mainstream support from Microsoft. ft.</p>
                   <p>We, at Dynamics Square, offer reliable, cost-efficient NAV and Business Central Support Services. Let's discuss your business requirements.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >
                      How do I upgrade to Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>If you are ready to upgrade your legacy systems like NAV to a cloud-based intelligent business application - Dynamics 365 Business Central, we're always a call away. Our team of Dynamics 365 experts and proficient consultants can help implement a highly configured solution for your business and fulfilling all your customized business needs.</p>
                      <p>For more details or availing of our free system health check, get in touch with us today. We're always ready and happy to help!</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >
                      What industries can Dynamics 365 Business Central Support?
                    </button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>The size and niche don't matter with Business Central. This business application can help all industries from e-Commerce, food & beverages, Manufacturing & Distribution, and Professional Services to Non-Profit hubs in meeting customer demands proactively. Microsoft Dynamics Business Central is a pro and an effective app for Startups that are ready to jumpstart their business at full throttle and start simplifying development processes and enabling automation practices right from the very initial.</p>
                      <p>Curious to know how Business Central can get implemented for your niche? Connect with our professionals now. </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >
                      How much does Dynamics 365 Business Central cost?
                    </button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Business Central is a full-fledged ERP system. It takes significant time and cost for its implementation. Thus, pricing may vary depending on your requirements and the complexity of your business process flows. Below are the standard plans available for your business needs:</p>
                      <ul>
                        <li>Essential - You will be charged $70 per user/per month for the Business Central essential plan.</li>
                        <li>Premium - The premium plan asks you to pay $100 per user/per month.</li>
                        <li>Team Member - This plan is available at $8 per user/month.</li>
                      </ul>
                      <p>Still not sure which plan would best suit your business, call our experts. They are always eager to extend help.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-6"
                    >
                      How to get quick support for Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>We have a highly embedded and dedicated support system to provide timely, efficient, and flexible support to our clients. Whether your requirement goes for end-user training, prepaid hour support, or ad-hoc support, we believe in a flexible support model suited to all your specific requirements and budget.</p>
                      <p>Get in touch with our consultants to know how our support model works and which of our offered solutions could be a vital one for your business. </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-7"
                    >
                      Can Power BI be integrated with Dynamics 365 Business Central?
                    </button>
                  </h3>
                  <div
                    id="faq-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Business Central is an all-in-one solution and is quite flexible if there comes a need to integrate business analytics software like Power BI or any other Microsoft Business Application for deriving advanced reporting strategies and strengthening decision-making.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs-extra">
        <div className="container">
        <div className="row justify-content-center">
<div className="col-lg-7 col-md-8">
          <header className="section-header">
            <h2>Help Your Business Grow With Our Best Business Central Resources</h2>
          </header>
          </div></div>
          <div className="row top-2 gx-5 justify-content-center">
           
            <div className="col-lg-6">
              <div className="blogs-extra-title">
                <h3>Documents</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      target="_blank"
                      href="/assets/pdf/Is-Your-Business-Outgrowing-Your-Accounting-Software.pdf"
                    >
                      <i className="bi bi-file-earmark-pdf"></i>Is Your
                      Business Outgrowing Your Accounting Software?
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Business-Owners-Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Business
                      Owner's Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Reimagine-Productivity.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reimagine
                      Productivity
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Dynamics_365_Enterprise_edition_Licensing_Guide.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Licensing Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Four-Technology-Trends-Helping-Businesses-Thrive-in-a-Digital-World.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Technology
                      Trends Helping Businesses Thrive in a Digital World
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/Reinvent-productivity-with-Dynamics-365-and-Microsoft-365.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> Reinvent
                      productivity with Dynamics 365 and Microsoft 365
                    </a>
                  </li>
                  <li>
                    <a
                      href="/assets/pdf/The-Total-Economic-Impact-of-Microsoft-Dynamics-365-Business-Central.pdf"
                      target="_blank"
                    >
                      <i className="bi bi-file-earmark-pdf"></i> The Total
                      Economic Impact of Dynamics 365 Business Central
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blogs-extra-title">
                <h3>Learn More</h3>
              </div>
              <div className="blogs-extra-right">
                <ul>
                  <li>
                    <a
                      rel=""
                      href="/why-choose-microsoft-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why Choose
                      Microsoft Dynamics 365 Business Central?
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="/advantages-capabilities/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Advantages
                      and Capabilities
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://www.dynamicssquare.com/upgrade-dynamics-nav-to-dynamics-365-business-central/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Why to
                      Upgrade Dynamics NAV to Business Central
                    </a>
                  </li>
                  <li>
                    <a
                      rel=""
                      href="https://www.dynamicssquare.com/reasons-to-upgrade-accounting-software/"
                      target="_self"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Is Your
                      Business Outgrowing Your Accounting Software?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      </>
    );
}

export default BusinessCentral;
