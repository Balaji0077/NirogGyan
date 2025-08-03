const data = [
  {
    "id": 1,
    "name": "Dr. Ayesha Sharma",
    "specialization": "Cardiologist",
    "profileImage": "https://images.pexels.com/photos/19218034/pexels-photo-19218034.jpeg",
    "available": true,
    "experience": "12 years",
    "bio": "Dr. Ayesha specializes in heart-related issues and cardiac care.",
    "clinicAddress": "123 Main St, Mumbai",
    "timings": "Mon-Fri, 10am-4pm"
  },
  {
    "id": 2,
    "name": "Dr. Ramesh Rao",
    "specialization": "Dermatologist",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F2%2F6%2F1%2F302428.jpg&f=1&nofb=1&ipt=989239a11c60febe38ae3d9ad8a2d5bfc5ed9691c75ccb6256dd11ca70c59168", 
    "available": false,
    "experience": "8 years",
    "bio": "Dr. Ramesh diagnoses and treats skin conditions with modern techniques.",
    "clinicAddress": "22 SkinCare Rd, Bangalore",
    "timings": "Tue-Sat, 11am-5pm"
  },
  {
    "id": 3,
    "name": "Dr. Neha Gupta",
    "specialization": "Neurologist",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.JW_4m4RVV4ywf0aiB6TWrgHaLH%3Fpid%3DApi&f=1&ipt=42fb2a22f3762ca92cbd53d6819460dbe679f3163a3d29e438c09aefecbe9f23",
    "available": true,
    "experience": "10 years",
    "bio": "Dr. Neha treats brain and nervous system disorders like migraines and seizures.",
    "clinicAddress": "7 Neuro Lane, Delhi",
    "timings": "Mon-Thu, 9am-3pm"
  },
  {
    "id": 7,
    "name": "Dr. Priya Nair",
    "specialization": "Gynecologist",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.zk6ljBq0PJHHSl6kgbrKVAHaHa%3Fpid%3DApi&f=1&ipt=0ad09f36e3fecd088049ff5cc7c70b311d67bcf1abb611ed4a92d295f048b9cb",
    "available": false,
    "experience": "11 years",
    "bio": "Dr. Priya focuses on women's reproductive health and prenatal care.",
    "clinicAddress": "60 Women's Clinic, Chennai",
    "timings": "Mon-Fri, 9am-1pm"
  },
  {
    "id": 4,
    "name": "Dr. Vikram Patil",
    "specialization": "Orthopedic",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F041%2F408%2F858%2Fnon_2x%2Fai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png&f=1&nofb=1&ipt=a4f218d6ebc6f227e8474b60c69cfe8584de6d4b02d34a4d7b51924128bff66c",
    "available": false,
    "experience": "15 years",
    "bio": "Dr. Vikram specializes in bone and joint care including fractures and spine issues.",
    "clinicAddress": "45 Ortho Center, Pune",
    "timings": "Wed-Sat, 10am-1pm"
  },
 
  {
    "id": 6,
    "name": "Dr. Arjun Mehta",
    "specialization": "ENT Specialist",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpng.pngtree.com%2Fpng-clipart%2F20230927%2Foriginal%2Fpngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png&f=1&nofb=1&ipt=0d4d409fe37b36e99a39b08ec88fc09df2ba38f946d736e5c700b711d14fcb81",
    "available": true,
    "experience": "7 years",
    "bio": "Dr. Arjun treats ear, nose, and throat issues including sinus and tonsillitis.",
    "clinicAddress": "12 ENT Center, Jaipur",
    "timings": "Tue-Sat, 11am-4pm"
  },
   {
    "id": 5,
    "name": "Dr. Sunita Menon",
    "specialization": "Pediatrician",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.freeimages.com%2Fimages%2Flarge-previews%2F711%2Fmedical-doctor-1236694.jpg&f=1&nofb=1&ipt=9bc03b602a05a5faa1b11a5b9a343ec14b88e25e0862e7ebfcdfb37bd10325f2",
    "available": true,
    "experience": "9 years",
    "bio": "Dr. Sunita provides children's healthcare focusing on growth and development.",
    "clinicAddress": "90 KidsCare, Hyderabad",
    "timings": "Mon-Fri, 2pm-6pm"
  },
  
  {
    "id": 8,
    "name": "Dr. Rohit Khanna",
    "specialization": "Psychiatrist",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F007%2F303%2F294%2Fnon_2x%2Fteam-of-medical-doctors-smiling-while-standing-with-arms-crossed-in-hospital-doctors-standing-as-a-team-with-arms-crossed-free-photo.jpg&f=1&nofb=1&ipt=40adf2f3117196efaa3f1ed3185a588683b2cacca8fd1e97350f3cbe5825b985",
    "available": true,
    "experience": "13 years",
    "bio": "Dr. Rohit treats mental health conditions including depression and anxiety.",
    "clinicAddress": "33 MindCare, Kolkata",
    "timings": "Wed-Sun, 3pm-7pm"
  },
  {
    "id": 9,
    "name": "Dr. Meera Joshi",
    "specialization": "General Physician",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.3jHLBFQwW7ZEXC74jM2JIAHaLH%3Fr%3D0%26pid%3DApi&f=1&ipt=80ebbebf842233a5d1de8fa42057120542ceca8d252347f80feaef26af788e11",
    "available": true,
    "experience": "6 years",
    "bio": "Dr. Meera offers general medical consultations and preventive healthcare.",
    "clinicAddress": "77 Health Point, Ahmedabad",
    "timings": "Mon-Fri, 10am-1pm"
  },
  {
    "id": 10,
    "name": "Dr. Karan Sinha",
    "specialization": "Urologist",
    "profileImage": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Ffoto-gratis%2Fatractivo-nutriologo-masculino-joven-bata-laboratorio-sonriendo-contra-fondo-blanco_662251-2960.jpg%3Fw%3D740%26t%3Dst%3D1674278676~exp%3D1674279276~hmac%3D561d9d42f7a7b6158b658e41610f791f44f89fd4a46f99d4b6c7b823f8f775b6&f=1&nofb=1&ipt=06b272b7a299eb7b1890be315bb22b80b1d4633407e03f414dd5f1d6af92b01e",
    "available": false,
    "experience": "14 years",
    "bio": "Dr. Karan treats urinary tract and male reproductive system disorders.",
    "clinicAddress": "18 UroCare, Lucknow",
    "timings": "Tue-Fri, 12pm-4pm"
  }
]

module.exports = data