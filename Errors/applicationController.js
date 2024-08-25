const Application = require('../models/Application');
const Vacancy = require('../models/Vacancy');

exports.applyForVacancy = async (req, res) => {
  try {
    const { vacancyId, fullName, email, phone, university, fieldOfStudy, cgpa, yearOfExperience, gender, coverLetter } = req.body;

    // Upload CV
    const cv = req.file.filename;

    const application = await Application.create({
      vacancyId,
      fullName,
      email,
      phone,
      university,
      fieldOfStudy,
      cgpa,
      yearOfExperience,
      gender,
      coverLetter,
      cv,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.findAll({
      include: [{ model: Vacancy, as: 'vacancy' }]
    });
    res.status(200).json(applications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
