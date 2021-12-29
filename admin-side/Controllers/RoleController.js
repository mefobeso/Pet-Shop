const Role = require("../Models/Role");
const express = require("express");
module.exports.GetRoles = async (req,res) =>{
    try {
        const roles = await Role.find()
        res.status(200).json(roles)
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
module.exports.GetDetailRole = async (req,res) =>{
    try{
        const {role_id} = req.params
        const role = await Role.findById(role_id)
        res.status(200).json(role)
    }
    catch (err){
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
module.exports.AddRole = async (req,res) =>{
    try{
        await Role.create(req.body);
        res.status(201).json("Create Succsessful!");
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:err}); 
    }
}
module.exports.UpdateRole = async (req,res) =>{
    try {
        const {role_id} = req.params
        const role = await Role.findById(role_id)
        const data = {
            name:req.body.name
        }
        updatedRole = await Role.findByIdAndUpdate(role_id, data,{new : true})
        // người dùng không được phép cập nhật sản phẩm
        if (!updatedRole) {
            return res.status(401).json({ success: false, message: 'loại thú cưng không tồn tại hoặc người dùng không được ủy quyền' })
        } else {
            res.json({ success: true, message: 'sửa loại thú cưng thành công', role: updatedRole })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
module.exports.DeleteRole = async (req,res) =>{
    try{
        const {role_id} = req.params
        await Role.findByIdAndDelete(role_id)
        res.status(200).json('Xóa role thành công')
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:err})
    }
}