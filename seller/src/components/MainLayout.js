import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { clearAuthStorage } from "../utils/authStorage";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const handleLogout = () => {
    clearAuthStorage();
    window.location.assign("/");
  };

  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">
            </span>
            <span className="lg-logo">
              <h5
                className="mb-0"
                style={{
                  color: "black",
                  fontWeight: 700,
                  fontSize: "25px",
                  lineHeight: "41.45px",
                }}
              >
                Future Furniture
              </h5>
            </span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            // {
            //   key: "customers",
            //   icon: <AiOutlineUser className="fs-4" />,
            //   label: "Customers",
            // },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Add Product",
                },
                {
                  key: "list-product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                // {
                //   key: "brand",
                //   icon: <SiBrandfolder className="fs-4" />,
                //   label: "Brand",
                // },
                // {
                //   key: "list-brand",
                //   icon: <SiBrandfolder className="fs-4" />,
                //   label: "Brand List ",
                // },
                // {
                //   key: "category",
                //   icon: <BiCategoryAlt className="fs-4" />,
                //   label: "Category",
                // },
                // {
                //   key: "list-category",
                //   icon: <BiCategoryAlt className="fs-4" />,
                //   label: "Category List",
                // },
                // {
                //   key: "color",
                //   icon: <AiOutlineBgColors className="fs-4" />,
                //   label: "Color",
                // },
                // {
                //   key: "list-color",
                //   icon: <AiOutlineBgColors className="fs-4" />,
                //   label: "Color List",
                // },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            // {
            //   key: "marketing",
            //   icon: <RiCouponLine className="fs-4" />,
            //   label: "Marketing",
            //   children: [
            //     {
            //       key: "coupon",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Add Coupon",
            //     },
            //     {
            //       key: "coupon-list",
            //       icon: <RiCouponLine className="fs-4" />,
            //       label: "Coupon List",
            //     },
            //   ],
            // },
            // {
            //   key: "blogs",
            //   icon: <FaBloggerB className="fs-4" />,
            //   label: "Blogs",
            //   children: [
            //     {
            //       key: "blog",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Add Blog",
            //     },
            //     {
            //       key: "blog-list",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Blog List",
            //     },
            //     {
            //       key: "blog-category",
            //       icon: <ImBlog className="fs-4" />,
            //       label: "Add Blog Category",
            //     },
            //     {
            //       key: "blog-category-list",
            //       icon: <FaBloggerB className="fs-4" />,
            //       label: "Blog Category List",
            //     },
            //   ],
            // },
            // {
            //   key: "enquiries",
            //   icon: <FaClipboardList className="fs-4" />,
            //   label: "Enquiries",
            // },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            {/* admin pic */}
            <div className="d-flex gap-3 align-items-center dropdown">
              <div
                className="d-flex gap-1 flex-row"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <UserOutlined className="fs-5" />
                <h5 className="mb-0">Admin123</h5>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    onClick={handleLogout}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
