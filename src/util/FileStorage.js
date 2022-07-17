import storage from "./firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL,getStorage,deleteObject } from "firebase/storage";

async function fileStorage(file) {
    if (!file) {
        alert("Please choose a file first!")
    }
    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed", (snapshot) => {
        const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // update progress
        // setPercent(percent);
        console.log(percent)
    },
        (err) => console.log(err),
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
                return url;
            });
        }
    );
}

function deleteStorageImage(foldername,filename) {
    const storagePath = getStorage();
    const desertRef = ref(storagePath, `${foldername}/${filename}`);
    deleteObject(desertRef).then((res) => {
    }).catch((error) => {
        // Uh-oh, an error occurred!
    });
}

export {
    fileStorage,
    deleteStorageImage
}