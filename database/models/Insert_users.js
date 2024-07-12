const mongoose = require('mongoose');
const Users = require('./Users'); // Ensure the path is correct

mongoose.connect('mongodb://localhost:27017/tinkerlab', { useNewUrlParser: true, useUnifiedTopology: true });

// run this in cmd to put the data on mongodb (e.g node Users_insert.js)

const sampleUsers = [
  {
      email: "mari_santos@dlsu.edu.ph",
      fullName: "Mari Santos",
      description: "A diligent computer science student.",
      title: "Student",
      password: "password1",
      profilePhoto: "/images/mari.png",
      reservations: [
          {
            seatNo: "A01",
            computerLab: "AG101",
            dateOfRequest: "2024-07-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-07-12",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "A08",
            computerLab: "AG101",
            dateOfRequest: "2024-07-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-07-15",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "A15",
            computerLab: "AG101",
            dateOfRequest: "2024-07-15",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-07-16",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "GK01",
            computerLab: "GK101",
            dateOfRequest: "2024-08-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-08-12",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "GK08",
            computerLab: "GK101",
            dateOfRequest: "2024-08-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-08-15",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "GK15",
            computerLab: "GK101",
            dateOfRequest: "2024-08-15",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-08-16",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "VL01",
            computerLab: "VL101",
            dateOfRequest: "2024-10-01",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-10-02",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "VL08",
            computerLab: "VL101",
            dateOfRequest: "2024-10-04",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-10-05",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "VL15",
            computerLab: "VL101",
            dateOfRequest: "2024-10-15",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-10-16",
            timeOfReservation: "7:30AM-8:00AM"
          }
      ]
  },
  {
      email: "carlos_bautista@dlsu.edu.ph",
      fullName: "Carlos Bautista",
      description: "Responsible for maintaining lab equipment.",
      title: "Student",
      password: "password2",
      profilePhoto: "/images/carlos.png",
      reservations: [
          {
            seatNo: "A02",
            computerLab: "A102",
            dateOfRequest: "2024-07-10",
            timeOfRequest: "01:00 PM",
            dateOfReservation: "2024-07-12",
            timeOfReservation: "8:30AM-9:00AM"
          },
          {
            seatNo: "A09",
            computerLab: "A102",
            dateOfRequest: "2024-07-10",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-07-15",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "A16",
            computerLab: "A102",
            dateOfRequest: "2024-07-15",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-07-16",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "GK02",
            computerLab: "GK102",
            dateOfRequest: "2024-08-10",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-08-112",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "GK09",
            computerLab: "GK102",
            dateOfRequest: "2024-08-10",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-08-15",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "GK16",
            computerLab: "GK102",
            dateOfRequest: "2024-08-15",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-08-16",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "VL02",
            computerLab: "VL102",
            dateOfRequest: "2024-10-01",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-10-02",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "VL09",
            computerLab: "VL102",
            dateOfRequest: "2024-10-04",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-10-05",
            timeOfReservation: "7:30AM-8:00AM"
          },
          {
            seatNo: "VL16",
            computerLab: "VL102",
            dateOfRequest: "2024-10-15",
            timeOfRequest: "09:00 PM",
            dateOfReservation: "2024-10-16",
            timeOfReservation: "7:30AM-8:00AM"
          }
      ]
  },
  {
      email: "andres_hidalgo@dlsu.edu.ph",
      fullName: "Andres Hidalgo",
      description: "Dedicated student focused on environmental science and sustainability.",
      title: "Student",
      password: "password3",
      profilePhoto: "/images/andres.png",
      reservations: [
          {
            seatNo: "A03",
            computerLab: "A103",
            dateOfRequest: "2024-07-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-07-12",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "A10",
            computerLab: "A103",
            dateOfRequest: "2024-07-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-07-15",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "A17",
            computerLab: "A103",
            dateOfRequest: "2024-07-16",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-07-16",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "GK03",
            computerLab: "GK103",
            dateOfRequest: "2024-08-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-08-12",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "GK10",
            computerLab: "GK103",
            dateOfRequest: "2024-08-10",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-08-15",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "GK17",
            computerLab: "GK103",
            dateOfRequest: "2024-08-15",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-08-16",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "VL03",
            computerLab: "VL103",
            dateOfRequest: "2024-10-01",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-10-02",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "VL10",
            computerLab: "VL103",
            dateOfRequest: "2024-10-04",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-10-05",
            timeOfReservation: "9:30AM-10:00AM"
          },
          {
            seatNo: "VL17",
            computerLab: "VL103",
            dateOfRequest: "2024-10-15",
            timeOfRequest: "08:00 AM",
            dateOfReservation: "2024-10-16",
            timeOfReservation: "9:30AM-10:00AM"
          }
      ]
  },
  {
    email: "stephen_go@dlsu.edu.ph",
    fullName: "Stephen Go",
    description: "God-fearing and string-willed human being.",
    title: "Student",
    password: "password4",
    profilePhoto: "/images/defaultpfp.png",
    reservations: [
      {
        seatNo: "A04",
        computerLab: "A104",
        dateOfRequest: "2024-07-10",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-07-12",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "A11",
        computerLab: "A104",
        dateOfRequest: "2024-07-10",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-07-15",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "A18",
        computerLab: "A104",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-07-16",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "GK04",
        computerLab: "GK104",
        dateOfRequest: "2024-08-10",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-08-12",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "GK11",
        computerLab: "GK104",
        dateOfRequest: "2024-08-10",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-08-15",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "GK18",
        computerLab: "GK104",
        dateOfRequest: "2024-08-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-08-16",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "VL04",
        computerLab: "VL104",
        dateOfRequest: "2024-10-01",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-02",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "VL11",
        computerLab: "VL103",
        dateOfRequest: "2024-10-04",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-05",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "VL18",
        computerLab: "VL104",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-16",
        timeOfReservation: "9:30AM-10:00AM"
      },
      {
        seatNo: "VL25",
        computerLab: "VL104",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-18",
        timeOfReservation: "10:00AM-10:30AM"
      }
    ]
  },
  {
  email: "japeth_aguilar@dlsu.edu.ph",
  fullName: "Japeth Aguilar",
  description: "Interested in any sports, especially basketball.",
  title: "Student",
  password: "password5",
  profilePhoto: "/images/defaultpfp.png",
  reservations: [
    {
      seatNo: "A05",
      computerLab: "A105",
      dateOfRequest: "2024-07-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-12",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "A12",
      computerLab: "A105",
      dateOfRequest: "2024-07-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-15",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "A19",
      computerLab: "A105",
      dateOfRequest: "2024-07-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-16",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "GK05",
      computerLab: "GK105",
      dateOfRequest: "2024-08-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-12",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "GK12",
      computerLab: "GK105",
      dateOfRequest: "2024-08-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-15",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "GK19",
      computerLab: "GK105",
      dateOfRequest: "2024-08-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-16",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "VL05",
      computerLab: "VL105",
      dateOfRequest: "2024-10-01",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-02",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "VL12",
      computerLab: "VL105",
      dateOfRequest: "2024-10-04",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-05",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "VL19",
      computerLab: "VL105",
      dateOfRequest: "2024-10-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-16",
      timeOfReservation: "9:30AM-10:00AM"
    }
  ]
  },
  {
  email: "marie_espiritu@dlsu.edu.ph",
  fullName: "Marie Espiritu",
  description: "Alway striving for Gold.",
  title: "Student",
  password: "password6",
  profilePhoto: "/images/defaultpfp.png",
  reservations: [
    {
      seatNo: "A06",
      computerLab: "A106",
      dateOfRequest: "2024-07-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-12",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "A13",
      computerLab: "A106",
      dateOfRequest: "2024-07-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-15",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "A20",
      computerLab: "A106",
      dateOfRequest: "2024-07-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-16",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "GK06",
      computerLab: "GK106",
      dateOfRequest: "2024-08-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-12",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "GK13",
      computerLab: "GK106",
      dateOfRequest: "2024-08-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-15",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "GK20",
      computerLab: "GK106",
      dateOfRequest: "2024-08-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-16",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "VL06",
      computerLab: "VL106",
      dateOfRequest: "2024-10-01",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-02",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "VL13",
      computerLab: "VL106",
      dateOfRequest: "2024-10-04",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-05",
      timeOfReservation: "9:30AM-10:00AM"
    },
    {
      seatNo: "VL20",
      computerLab: "VL106",
      dateOfRequest: "2024-10-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-16",
      timeOfReservation: "9:30AM-10:00AM"
    }
  ]
},
{
  email: "claudette_escobar@dlsu.edu.ph",
  fullName: "Claudette Escobar",
  description: "Invulnerable to stress and anxiety.",
  title: "Student",
  password: "password7",
  profilePhoto: "/images/defaultpfp.png",
  reservations: [
    {
      seatNo: "A07",
      computerLab: "A107",
      dateOfRequest: "2024-07-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-12",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "A14",
      computerLab: "A107",
      dateOfRequest: "2024-07-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-15",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "A21",
      computerLab: "A107",
      dateOfRequest: "2024-07-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-07-18",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "GK07",
      computerLab: "GK107",
      dateOfRequest: "2024-08-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-12",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "GK14",
      computerLab: "GK107",
      dateOfRequest: "2024-08-10",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-15",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "GK21",
      computerLab: "GK107",
      dateOfRequest: "2024-08-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-08-16",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "VL07",
      computerLab: "VL107",
      dateOfRequest: "2024-10-01",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-02",
      timeOfReservation: "10:00AM-10:30AM"
    },
    {
      seatNo: "VL14",
      computerLab: "VL107",
      dateOfRequest: "2024-10-04",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-05",
      timeOfReservation: "10:0AM-10:30AM"
    },
    {
      seatNo: "VL21",
      computerLab: "VL107",
      dateOfRequest: "2024-10-15",
      timeOfRequest: "08:00 AM",
      dateOfReservation: "2024-10-16",
      timeOfReservation: "10:00AM-10:30AM"
    }
  ]
},
  {
    email: "irina.solarez@dlsu.edu.ph",
    fullName: "Irina Solarez",
    description: "Lab technician with expertise in molecular biology and genetics.",
    title: "Lab Technician",
    password: "password8",
    profilePhoto: "/images/irina.png",
    reservations: [
      {
        seatNo: "A22",
        computerLab: "A102",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "08:00 PM",
        dateOfReservation: "2024-07-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "A23",
        computerLab: "A102",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "08:00 PM",
        dateOfReservation: "2024-07-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "GK22",
        computerLab: "GK102",
        dateOfRequest: "2024-08-15",
        timeOfRequest: "09:00 PM",
        dateOfReservation: "2024-07-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "GK23",
        computerLab: "GK102",
        dateOfRequest: "2024-08-15",
        timeOfRequest: "09:00 PM",
        dateOfReservation: "2024-07-19",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "VL22",
        computerLab: "VL102",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 PM",
        dateOfReservation: "2024-10-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "VL23",
        computerLab: "VL102",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 PM",
        dateOfReservation: "2024-10-19",
        timeOfReservation: "10:00AM-10:30AM"
      }
    ]
  },
  {
      email: "eli.lopez@dlsu.edu.ph",
      fullName: "Eli Lopez",
      description: "Experienced lab technician specializing in chemical analysis.",
      title: "Lab Technician",
      password: "password9",
      profilePhoto: "/images/eli.png",
      reservations: [
        {
          seatNo: "A27",
          computerLab: "A106",
          dateOfRequest: "2024-07-15",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-07-18",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "A28",
          computerLab: "A107",
          dateOfRequest: "2024-07-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-07-22",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "A29",
          computerLab: "A107",
          dateOfRequest: "2024-07-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-07-23",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "A30",
          computerLab: "A107",
          dateOfRequest: "2024-07-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-07-24",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "GK27",
          computerLab: "GK106",
          dateOfRequest: "2024-08-15",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-08-18",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "GK28",
          computerLab: "GK107",
          dateOfRequest: "2024-08-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-08-22",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "GK29",
          computerLab: "GK107",
          dateOfRequest: "2024-08-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-08-23",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "GK30",
          computerLab: "GK107",
          dateOfRequest: "2024-08-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-08-24",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "VL27",
          computerLab: "VL106",
          dateOfRequest: "2024-10-15",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-10-18",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "VL28",
          computerLab: "VL107",
          dateOfRequest: "2024-10-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-10-22",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "VL29",
          computerLab: "VL107",
          dateOfRequest: "2024-10-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-10-23",
          timeOfReservation: "10:00AM-10:30AM"
        },
        {
          seatNo: "VL30",
          computerLab: "VL107",
          dateOfRequest: "2024-10-17",
          timeOfRequest: "08:00 AM",
          dateOfReservation: "2024-10-24",
          timeOfReservation: "10:00AM-10:30AM"
        }
      ]
  },
  {
    email: "irish_sabelina@dlsu.edu.ph",
    fullName: "Irish Sabelina",
    description: "Expert in the field of networking.",
    title: "Lab Technician",
    password: "password10",
    profilePhoto: "/images/defaultpfp.png",
    reservations: [
      {
        seatNo: "A24",
        computerLab: "A103",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-07-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "A25",
        computerLab: "A104",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-07-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "A26",
        computerLab: "A105",
        dateOfRequest: "2024-07-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-07-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "GK24",
        computerLab: "GK103",
        dateOfRequest: "2024-08-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-08-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "GK25",
        computerLab: "GK104",
        dateOfRequest: "2024-08-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-08-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "GK26",
        computerLab: "GK105",
        dateOfRequest: "2024-08-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-08-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "VL24",
        computerLab: "VL103",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "VL25",
        computerLab: "VL104",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-18",
        timeOfReservation: "10:00AM-10:30AM"
      },
      {
        seatNo: "VL26",
        computerLab: "VL105",
        dateOfRequest: "2024-10-15",
        timeOfRequest: "08:00 AM",
        dateOfReservation: "2024-10-18",
        timeOfReservation: "10:00AM-10:30AM"
      }

    ]
  }
];


Users.insertMany(sampleUsers)
  .then(() => {
    console.log('Sample users inserted successfully');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting sample users: ', err);
  });