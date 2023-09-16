import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

type BoxProps = {
  element: string;
  attr?: any;
  children?: Element | Element[] | string | string[];
};

const Box = (props: BoxProps) => {
  const el = document.createElement(props.element);
  if (props.attr) {
    Object.keys(props.attr).forEach((key: string) => {
      el[key] = props.attr[key];
    });
  }
  if (!Array.isArray(props.children)) el.append(props.children!);
  else el.append(...props.children);
  return el;
};

app!.append(
  Box({
    //orginal div
    element: "div",
    attr: {
      className: " flex flex-col gap-16 justify-center items-center m-9 ",
    },
    children: [
      Box({
        element: "h1",
        attr: {
          className: "text-7xl font-semibold my-14 text-white ",
        },
        children: "Contact keeper",
      }),

      Box({
        //Form Component
        element: "form",
        attr: {
          className: "flex justify-center items-center flex-col gap-3",
        },
        children: [
          Box({
            // Contact Name Lable
            element: "lable",
            attr: {
              className: "text-white",
            },
            children: "Input Name",
          }),
          Box({
            // Contact Name Input
            element: "input",
            attr: {
              className:
                "bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              id: "contactName",
            },
          }),
          Box({
            // Phone Number Lable
            element: "lable",
            attr: {
              className: "text-white",
            },
            children: "Phone Number",
          }),
          Box({
            // Phone Number Input
            element: "input",
            attr: {
              className:
                "bg-white border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
              id: "phoneNumber",
            },
          }),
          Box({
            // Radio Buttons Div
            element: "div",
            attr: {
              className: "flex content-center gap-36 mt-7",
            },
            children: [
              Box({
                // Radio Buttons SIM Div
                element: "div",
                attr: {
                  className: "flex justify-center items-center gap-1",
                },
                children: [
                  // Radio Button lable SIM
                  Box({
                    element: "label",
                    attr: {
                      className:
                        "text-white ml-2 text-base font-light text-gray-900 dark:text-gray-300",
                    },
                    children: "SIM",
                  }),
                  Box({
                    // Radio Button Input SIM
                    element: "input",
                    attr: {
                      type: "radio",
                      id: "SIMButton",
                      name: "storage",
                      value: "",
                      className:
                        "w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                    },
                  }),
                ],
              }),
              Box({
                // Radio Buttons Device Div
                element: "div",
                attr: {
                  className: "flex justify-center items-center gap-1",
                },
                children: [
                  Box({
                    // Radio Buttons Device lable
                    element: "label",
                    attr: {
                      className:
                        "text-white ml-2 text-base font-light text-gray-900 dark:text-gray-300",
                    },
                    children: "Device",
                  }),
                  Box({
                    // Radio Buttons Device Input
                    element: "input",
                    attr: {
                      type: "radio",
                      id: "deviceStorage",
                      name: "storage",
                      value: "",
                      className:
                        "w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600",
                    },
                  }),
                ],
              }),
            ],
          }),
          Box({
            // Show Contacts List & Subimt button
            element: "div",
            attr: {
              className: "flex-col my-4",
            },
            children: [
              Box({
                // Subimt button
                element: "button",
                attr: {
                  type: "button",
                  id: "submitButton",
                  className:
                    "mx-8 text-black bg-white hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                },
                children: "Submit",
              }),
              Box({
                // Show Contacts List button
                element: "button",
                attr: {
                  type: "button",
                  id: "showContactsButton",
                  className:
                    "mx-8 text-black bg-white hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
                },
                children: "Show Contacts List",
              }),
            ],
          }),
        ],
      }),
    ],
  })
);
app!.append(
  Box({
    // Drawer Component
    element: "div",
    attr: {
      id: "contactsListDrawer",
      className:
        "fixed own-transition top-0 right-[-100%] z-40 h-screen w-96 p-4 overflow-y-auto own-transition translate-x-full bg-white dark:bg-gray-800",
    },
    children: [
      Box({
        // title drawer
        element: "div",
        attr: {
          className: "flex justify-between items-center",
        },
        children: [
          Box({
            // (Contacts) Title
            element: "h5",
            attr: {
              className:
                "inline-flex items-center mb-4 text-base font-semibold text-black dark:text-black",
            },
            children: "Contacts",
          }),
          Box({
            // close drawer button
            element: "button",
            attr: {
              id: "closeDrawerButton",
              type: "button",
              dataDrawerHide: "drawer-right-example",
              ariaControls: "drawer-right-example",
              className:
                "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-4 h-4 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white mt-2",
            },
            children: [
              // close drawer svg
              Box({
                element: "img",
                attr: {
                  src: "../close.png",
                },
              }),
            ],
          }),
        ],
      }),
      Box({
        // show contacts input field
        element: "ul",
        attr: {
          className:
            " px-1 py-2 flex justify-between items-center border-b-2 border-black p-4",
        },
        children: [
          Box({
            element: "li",
            attr: {
              className: "text-sm",
            },
            children: "NAME",
          }),
          Box({
            element: "li",
            attr: {
              className: "text-sm",
            },
            children: "NUMBER",
          }),
          Box({
            element: "li",
            attr: {
              className: "text-sm",
            },
            children: "STORAGE",
          }),
        ],
      }),
      Box({
        element: "ul",
        attr: {
          id: "contacts-List",
          className: "flex flex-col items-center gap-4 m-6",
        },
        children: [],
      }),
    ],
  })
);

type contactsType = {
  ID: string;
  name: string;
  phoneNumber: string | number;
  stored: "Storage" | "SIM";
};

type contactsListType = contactsType[];

const contactsList: contactsListType = [];

const contactNameInput =
  document.querySelector<HTMLInputElement>("#contactName");
const PhoneNumberInput =
  document.querySelector<HTMLInputElement>("#phoneNumber");
const submitButton = document.querySelector<HTMLButtonElement>("#submitButton");
const deviceStorage =
  document.querySelector<HTMLInputElement>("#deviceStorage");
const showContactsButton = document.querySelector<HTMLButtonElement>(
  "#showContactsButton"
);
const contactsListDrawer = document.querySelector<HTMLButtonElement>(
  "#contactsListDrawer"
);
const closeDrawerButton =
  document.querySelector<HTMLButtonElement>("#closeDrawerButton");
const ulElement = document.querySelector<HTMLUListElement>("#contacts-List");


submitButton?.addEventListener("click", () => {
  const newContact: contactsType = {
    ID: crypto.randomUUID(),
    name: contactNameInput?.value ?? " ",
    phoneNumber: PhoneNumberInput?.value ?? " ",
    stored: deviceStorage?.checked ? "Storage" : "SIM",
  };
  contactsList.push(newContact);
  console.log(contactsList);

  const liElement = document.createElement("li");
  const h2Element = document.createElement("h2");
  h2Element.innerText = newContact.name;
  const pElement = document.createElement("p");
  pElement.innerText = newContact.phoneNumber.toString();
  const pElement2 = document.createElement("p");
  pElement2.innerText = newContact.stored;

  liElement?.appendChild(h2Element);
  liElement?.appendChild(pElement);
  liElement?.appendChild(pElement2);
  ulElement?.appendChild(liElement);

  h2Element.className = "text-sm bg-slate-300 px-2 py-3 mx-3 shadow-lg rounded-md gap-5";
  pElement.className = "text-sm bg-slate-300 px-2 py-3 shadow-lg rounded-md gap-5";
  pElement2.className = "text-sm bg-slate-300 px-2 py-3 mx-3 shadow-lg rounded-md gap-5" 
  liElement.className =
    "flex justify-between ";
  liElement.style.width = "365px";
});

showContactsButton?.addEventListener("click", () => {
  contactsListDrawer?.classList.remove("right-[-100%]");
  contactsListDrawer?.classList.add("right-[25%]");
});

closeDrawerButton?.addEventListener("click", () => {
  contactsListDrawer?.classList.remove("right-[25%]");
  contactsListDrawer?.classList.add("right-[-100%]");
});
