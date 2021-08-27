const data = [
  {
    name: "User Name",
    email: "abc@gmail.com",
    notify: 1,
    mode: "light",
    notify_data: [
      {
        id: 0,
        msg: "Welcome to Parallely !"
      }
    ],
    prof_image:
      "https://images.unsplash.com/photo-1578176603894-57973e38890f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    phone: 9645584114,
    address: "Mumbai",
    aadhar: "98******6024",
    rating: 3,
    reportStatus: true,
    history: [
      {
        id: 0,
        groupName: "Paari-125",
        totalMembers: 5
      },
      {
        id: 1,
        groupName: "Bhoot",
        totalMembers: 2
      }
    ],
    friends: [
      {
        id: 0,
        name: "Shivam Singh",
        total: 0,
        rating: "4.8",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 1,
        name: "Aaditya Prakash",
        total: 0,
        rating: "4.7",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 2,
        name: "Ambuj Porwarl",
        total: 0,
        rating: "4.5",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 3,
        name: "Pushp Paritosh",
        total: 0,
        rating: "4.1",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 4,
        name: "Manas Khare",
        total: 0,
        rating: "4.5",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 5,
        name: "Rahul Agrahari",
        total: 0,
        rating: "4.2",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 6,
        name: "Deepraj Singh",
        total: 0,
        rating: "4.4",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      },
      {
        id: 7,
        name: "Abhishek Biswal",
        total: 0,
        rating: "3.8",
        owe: [
          {
            id: 0,
            money: 0,
            hex_index: -1
          }
        ]
      }
    ],
    dashboard: [
      {
        refcode: "YASH1256AB",
        groups: 5,
        pending: 5,
        refno: 5,
        paid: 5,
        table: [
          {
            _id: 1,
            gname: "Paari-125",
            amount: 300
          },
          {
            _id: 2,
            gname: "Dominators",
            amount: 500
          },
          {
            _id: 3,
            gname: "BroCoders",
            amount: 1000
          }
        ]
      }
    ],
    wallet: [
      {
        invoice: "ABCD",
        remail: "ABCD",
        receipent: "ABCD",
        txnstatus: "ABCD",
        card: [
          {
            id: 1,
            card_holder: "Yash",
            balance: "$ 1250",
            card_num: "1234-5678-9123",
            valid: "03/25"
          }
          // ,
          // {
          //   id: 2,
          //   card_holder: "Yash",
          //   balance: "$ 150",
          //   card_num: "4557-3215-9758",
          //   valid: "07/26"
          // }
        ],
        wallettable: [
          {
            id: 1,
            invoiceID: "#Para_12547",
            date: "August, 2 2021",
            recepient: "Aaditya",
            email: "aaditya@gmail.com",
            status: "Success"
          },
          {
            id: 2,
            invoiceID: "#Para_25831",
            date: "July 28 2021",
            recepient: "Shivam",
            email: "shivam@gmail.com",
            status: "Success"
          },
          {
            id: 3,
            invoiceID: "#Para_82167",
            date: "July 19 2021",
            recepient: "Manas",
            email: "manas@gmail.com",
            status: "Failed"
          }
        ]
      }
    ]
  }
];
export default data;
