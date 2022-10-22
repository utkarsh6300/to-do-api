const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const auth = require('../../middleware/auth');
const Todo = require('../../models/Todo');

router.get('/:id', auth, async (req, res) => {
    try {
      const todo = await Todo.findOne({user:req.user.id,_id:req.params.id});

 // Check for ObjectId format and post
 if (!mongoose.Types.ObjectId.isValid(req.params.id) || !todo) {
    return res.status(404).json({ msg: 'Todo not found' });
  }

  var duedate=new Date(todo.duedate);
  var todaydate=new Date();
  if(todo.status==='done') 
     res.json({msg:"Relaxed"});

  else {
     if(duedate-todaydate<172800000)   //2 days
     res.json({msg:"Upcoming"});
     else if(duedate-todaydate<0) 
     res.json({msg:"Critical"});
     else  
     res.json({msg:"Relaxed"});
     } 
    //  if(todo.status==='working')
 

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  module.exports=router;