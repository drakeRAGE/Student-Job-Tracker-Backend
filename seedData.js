const mongoose = require('mongoose');
const Job = require('./models/Job');
require('dotenv').config();

const jobs = [
    {
        title: "Software Engineer Intern",
        company: "Microsoft",
        location: "Redmond, WA",
        description: "Join Microsoft's engineering team as an intern to work on cutting-edge technologies.",
        requirements: ["JavaScript", "React", "Node.js", "Cloud Computing"],
        salary: 8000,
        status: "Applied",
        applicationDate: new Date("2025-03-05")
    },
    {
        title: "Frontend Developer",
        company: "Google",
        location: "Mountain View, CA",
        description: "Work on Google's core web applications and help shape the future of the web.",
        requirements: ["React", "TypeScript", "CSS3", "Web Performance"],
        salary: 9500,
        status: "Interview",
        applicationDate: new Date("2025-03-15")
    },
    {
        title: "Full Stack Developer",
        company: "Amazon",
        location: "Seattle, WA",
        description: "Build scalable solutions for Amazon's e-commerce platform.",
        requirements: ["Java", "Spring Boot", "AWS", "MongoDB"],
        salary: 9000,
        status: "Applied",
        applicationDate: new Date("2025-03-20")
    },
    {
        title: "Cloud Engineer Intern",
        company: "IBM",
        location: "Austin, TX",
        description: "Work with IBM Cloud technologies and help clients transform their infrastructure.",
        requirements: ["Cloud Computing", "Docker", "Kubernetes", "Linux"],
        salary: 7500,
        status: "Interview",
        applicationDate: new Date("2025-03-25")
    },
    {
        title: "Data Engineer",
        company: "Meta",
        location: "Menlo Park, CA",
        description: "Work on large-scale data infrastructure at Meta.",
        requirements: ["Python", "SQL", "Apache Spark", "Data Warehousing"],
        salary: 8500,
        status: "Applied",
        applicationDate: new Date("2025-03-30")
    },
    {
        title: "DevOps Engineer",
        company: "Netflix",
        location: "Los Gatos, CA",
        description: "Help build and maintain Netflix's world-class streaming infrastructure.",
        requirements: ["AWS", "CI/CD", "Infrastructure as Code", "Python"],
        salary: 9200,
        status: "Rejected",
        applicationDate: new Date("2025-04-02")
    },
    {
        title: "Mobile Developer",
        company: "Apple",
        location: "Cupertino, CA",
        description: "Develop innovative iOS applications at Apple.",
        requirements: ["Swift", "iOS Development", "UIKit", "SwiftUI"],
        salary: 8800,
        status: "Applied",
        applicationDate: new Date("2025-04-05")
    },
    {
        title: "Backend Engineer",
        company: "Salesforce",
        location: "San Francisco, CA",
        description: "Build scalable backend services for Salesforce's CRM platform.",
        requirements: ["Java", "Spring", "Microservices", "REST APIs"],
        salary: 8700,
        status: "Interview",
        applicationDate: new Date("2025-04-08")
    },
    {
        title: "ML Engineer Intern",
        company: "NVIDIA",
        location: "Santa Clara, CA",
        description: "Work on cutting-edge machine learning projects at NVIDIA.",
        requirements: ["Python", "PyTorch", "Machine Learning", "CUDA"],
        salary: 8300,
        status: "Applied",
        applicationDate: new Date("2025-04-10")
    },
    {
        title: "Security Engineer",
        company: "Intel",
        location: "Portland, OR",
        description: "Help protect Intel's infrastructure and products through security engineering.",
        requirements: ["Security Protocols", "Cryptography", "Network Security", "Python"],
        salary: 8600,
        status: "Applied",
        applicationDate: new Date("2025-04-11")
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