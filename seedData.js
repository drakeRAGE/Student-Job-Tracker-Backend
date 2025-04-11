const mongoose = require('mongoose');
const Job = require('./models/Job');
require('dotenv').config();

const jobs = [
    {
        company: "Microsoft",
        role: "Software Engineer Intern",
        status: "Applied",
        applicationDate: new Date("2025-03-05"),
        link: "https://careers.microsoft.com/students"
    },
    {
        company: "Google",
        role: "Frontend Developer",
        status: "Interview",
        applicationDate: new Date("2025-03-15"),
        link: "https://careers.google.com"
    },
    {
        company: "Amazon",
        role: "Full Stack Developer",
        status: "Applied",
        applicationDate: new Date("2025-03-20"),
        link: "https://amazon.jobs"
    },
    {
        company: "IBM",
        role: "Cloud Engineer Intern",
        status: "Interview",
        applicationDate: new Date("2025-03-25"),
        link: "https://careers.ibm.com"
    },
    {
        company: "Meta",
        role: "Data Engineer",
        status: "Offer",
        applicationDate: new Date("2025-03-30"),
        link: "https://careers.meta.com"
    },
    {
        company: "Netflix",
        role: "DevOps Engineer",
        status: "Rejected",
        applicationDate: new Date("2025-04-02"),
        link: "https://jobs.netflix.com"
    },
    {
        company: "Apple",
        role: "Mobile Developer",
        status: "Applied",
        applicationDate: new Date("2025-04-05"),
        link: "https://www.apple.com/careers"
    },
    {
        company: "Salesforce",
        role: "Backend Engineer",
        status: "Interview",
        applicationDate: new Date("2025-04-08"),
        link: "https://careers.salesforce.com"
    },
    {
        company: "NVIDIA",
        role: "ML Engineer Intern",
        status: "Applied",
        applicationDate: new Date("2025-04-10"),
        link: "https://nvidia.wd5.myworkdayjobs.com/NVIDIAExternalCareerSite"
    },
    {
        company: "Intel",
        role: "Security Engineer",
        status: "Applied",
        applicationDate: new Date("2025-04-11"),
        link: "https://jobs.intel.com"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await Job.deleteMany({}); // Clear existing jobs
        await Job.insertMany(jobs);
        console.log('Database seeded successfully');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDB();