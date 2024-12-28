const express = require('express');
const Task = require('../models/task');

const router = express.Router();//creer nouvelle objet

// Ajouter une tâche
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;//envoyer les information du corps de la requetta
    if (!title || !description) {
      return res.status(400).json({ message: 'Le titre et la description obligatoires.'});
    }
    const newTask = new Task({ title, description });//creation d'une nouvelle instance
    await newTask.save();//enregistrer une nouveele tache dans mongodb
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: 'Erreur', error: err.message });
  }
});

//afficher tous les taches 
router.get('/', async (req, res) => {
    try {
      const allTasks = await Task.find();
      res.status(200).json(allTasks);
    } catch (err) {
      res.status(500).json({ message: 'Erreur', error: err.message });
    }
  });
//modifier tache
router.put('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { completed } = req.body;
      const existingTask = await Task.findById(id);
      if (!existingTask) {
        return res.status(404).json({ message: 'pas de tache' });
      }
      existingTask.completed = completed;
      await existingTask.save();
      res.status(200).json(existingTask);
    } catch (err) {
      res.status(500).json({ message: 'Erreur', error: err.message });
    }
  });
  
//supprimer une tache
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTask = await Task.findByIdAndDelete(id);
      if (!deletedTask) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
      }
      res.status(200).json({ message: 'Tâche supprimée avec succès' });
    } catch (err) {
      res.status(500).json({ message: 'Erreur serveur', error: err.message });
    }
  });
module.exports = router;
