import * as XLSX from "xlsx";
import appwrite from "../appwrite";

const storeDataInAppwrite = async () => {
  const workbook = XLSX.readFile("./data/dummyDataset.xlsx");
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  const collectionId = "your-collection-id"; // Create a collection in Appwrite dashboard

  for (const entry of data) {
    await appwrite.database.createDocument(collectionId, { ...entry });
  }

  console.log("Data stored in Appwrite successfully!");
};

export default storeDataInAppwrite;
