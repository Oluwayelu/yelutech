import { db } from "../services/firebase";

export function readBlogs() {
  let blogs = [];
  db.ref("blogs").on("value", snapshot => {
    snapshot.forEach(snap => {
      blogs.push(snap.val())
    });
    return blogs;
  });
}

export function createProject(project) {
  return db.ref("projects").push({
    name: project.name,
    email: project.email,
    phone: project.phone,
    service: project.service,
    date: project.date,
    message: project.message
  });
}

