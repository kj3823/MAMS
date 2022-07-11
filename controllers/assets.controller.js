const Assets = require('../util/util.database').Assets;

async function getAssetsByDepartment(req, res, next)
{
    let assets;
    let dept = req.body.dept;
    assets = await Assets.find({department:dept})
    console.log(typeof(assets));
    //console.log(dept)
    if(assets)
    {
        console.log(assets);
        let count  = await Assets.countDocuments({department:dept})
        console.log("Total Count", count)
        res.status(200).json({message:"Assets are:", Total_Count:count//,
        ///...assets.toJSON()
        })
    }
    else
    {
        res.status(201).send({error:"No Assets found"})
    }
}
async function getAssetByUniqueID(req, res, next)
{
    let id = req.body.uniqueID;
    console.log(id);
    let asset = await Assets.findOne({"assetDetails.uniqueID":id});
    if(asset)
    {
        console.log(asset);
        res.status(200).send({
            message:"Asset Details:",
            ...asset.toJSON()
        })
    } 
    else
    {
        res.status(201).send({
            error:"Invaild Unique ID"
        })
    }
}
async function updateAssetByUniqueID(req, res, next)
{
    const id = req.body.uniqueID;
    let assetFamily;
    let asset =  await Assets.findOne({uniqueID:id})
    if(asset)
    {
        if(req.body.assetFamily !== undefined && req.body.assetFamily === String)
        {
            assetFamily = req.body.assetFamily;
        }    
        if(req.body.assetCategory !== undefined && req.body.assetFamily === String)
        {
            assetFamily = req.body.assetFamily;
        }                      
    }
}
module.exports =
{
    deptQuerry : getAssetsByDepartment,
    idQuerry: getAssetByUniqueID
}