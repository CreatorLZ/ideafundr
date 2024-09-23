import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Upload as UploadIcon, Video, Image } from "lucide-react"; // Importing additional icons
import Footer from "../components/Footer";
import { AuthContext } from "../context/AuthContext";
import { db, storage } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Container = styled.div`
  width: 100%;
`;
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100%;
  padding: 20px;
  margin-top: 100px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 100px;
    padding-bottom: 50px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-top: 100px;
    padding-bottom: 50px;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #3a4f5c;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Visible Input for text fields
const VisibleInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

// Hidden Input for file uploads
const HiddenInput = styled.input`
  display: none; /* Hide the file inputs */
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
`;

const TechnicalSpecsGroup = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const UploadArea = styled.div`
  border: 2px dashed #ccc;
  border-radius: 4px;
  padding: 2rem;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition: border-color 0.3s;

  &:hover {
    border-color: #999;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const UploadIconStyled = styled(UploadIcon)`
  width: 48px;
  height: 48px;
  color: #666;
`;

const VideoIconStyled = styled(Video)`
  width: 48px;
  height: 48px;
  color: #666;
`;

const ImageIconStyled = styled(Image)`
  width: 48px;
  height: 48px;
  color: #666;
`;

const UploadText = styled.p`
  color: #666;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const SelectedFileName = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;

const SubmitButton = styled.button`
  background-color: #009688;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: #00796b;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem;
  }
`;

const SuccessMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: green;
  text-align: center;
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: red;
  text-align: center;
`;

const Upload = () => {
  const { currentUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    keyFeatures: "",
    keyBenefits: "",
    productDescription: "",
    size: "",
    weight: "",
    materialUsed: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false); // State for success message
  const [deployFormData, setDeployFormData] = useState(null); // FormData for 3D upload
  const [imageFile, setImageFile] = useState(null); // Image file
  const [videoFile, setVideoFile] = useState(null); // Video file
  const [selected3DFile, setSelected3DFile] = useState(null); // 3D file name
  const [errorMsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file selection for image and video
  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
    }
  };

  // Handle 3D file selection
  const handle3DFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newFormData = new FormData();
      newFormData.append("deploy", file);
      setDeployFormData(newFormData);
      setSelected3DFile(file.name); // Set selected file name
    }
  };

  // Upload a file to Firebase Storage and get its download URL
  const uploadToStorage = async (file, path) => {
    const storageRef = ref(storage, path);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setSuccess(false); // Reset success message

    const {
      productName,
      productCategory,
      keyFeatures,
      keyBenefits,
      productDescription,
      size,
      weight,
      materialUsed,
    } = formData;

    if (!currentUser) {
      setErrorMsg("User not authenticated.");
      setError(true);
      setLoading(false);
      return;
    }

    try {
      // Validate form fields
      if (!productName.trim()) {
        throw new Error("Product name is required.");
      }

      // Ensure productName complies with SwiftXR naming rules
      const validProductName = productName
        .toLowerCase()
        .replace(/[^a-z0-9._-]/g, "-")
        .replace(/---+/g, "-") // Prevent '---' sequence
        .slice(0, 100); // Limit to 100 characters

      // Upload the image and video to Firebase Storage
      const imageUrl = imageFile
        ? await uploadToStorage(
            imageFile,
            `inventions/${validProductName}/image.${imageFile.name
              .split(".")
              .pop()}`
          )
        : "";
      const videoUrl = videoFile
        ? await uploadToStorage(
            videoFile,
            `inventions/${validProductName}/video.${videoFile.name
              .split(".")
              .pop()}`
          )
        : "";

      // Step 1: Set the SwiftXR site config
      const swiftResponse = await fetch("https://api.swiftxr.io/v1/sites/", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer SWF.7j6EBQIKQ8PBLg.M7KeWxbzaFIQga37fB17j9WkKe1FmgBxy0F2QlKyUkI", // Replace with your actual API key
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          site_name: validProductName, // Use validated product name
          config: {
            type: "model",
            logo_url: "",
            compress_model: true,
            model_compression_level: 5,
            compress_image: true,
            image_compression_level: 5,
            tooltip: "View in your Space",
            auto_rotate: true,
            use_ar: true,
          },
        }),
      });

      if (!swiftResponse.ok) {
        const errorText = await swiftResponse.text();
        throw new Error(`SwiftXR Site Creation Failed: ${errorText}`);
      }

      const swiftResult = await swiftResponse.json();
      const site_id = swiftResult?.site?.site_id;

      if (!site_id) {
        throw new Error("SwiftXR site ID not returned.");
      }

      console.log("Gotten site Id:", site_id);

      // Step 2: Upload the 3D model
      let site_url = "";
      if (deployFormData && site_id) {
        const deployResponse = await fetch(
          `https://api.swiftxr.io/v1/sites/deploy/${site_id}`,
          {
            method: "POST",
            headers: {
              Authorization:
                "Bearer SWF.7j6EBQIKQ8PBLg.M7KeWxbzaFIQga37fB17j9WkKe1FmgBxy0F2QlKyUkI",
            },
            body: deployFormData,
          }
        );

        if (!deployResponse.ok) {
          const errorText = await deployResponse.text();
          throw new Error(`SwiftXR Model Deployment Failed: ${errorText}`);
        }

        const deployResult = await deployResponse.json();
        site_url = deployResult?.site?.site_url;

        if (!site_url) {
          throw new Error("SwiftXR site URL not returned.");
        }

        console.log("Gotten Site URL:", site_url);
      }

      // Step 3: Store invention details in Firestore
      await setDoc(doc(db, "inventions", validProductName), {
        productName,
        productCategory,
        keyFeatures,
        keyBenefits,
        productDescription,
        size,
        weight,
        materialUsed,
        arDemoLink: site_url,
        imageUrl,
        videoUrl,
        createdBy: currentUser.uid,
        creatorEmail: currentUser.email,
        createdAt: new Date(),
      });

      console.log("Invention uploaded successfully with AR link:", site_url);
      setSuccess(true); // Show success message

      // Reset form
      setFormData({
        productName: "",
        productCategory: "",
        keyFeatures: "",
        keyBenefits: "",
        productDescription: "",
        size: "",
        weight: "",
        materialUsed: "",
      });
      setImageFile(null);
      setVideoFile(null);
      setDeployFormData(null);
      setSelected3DFile(null);
      setError(false);
      setErrorMsg("");
    } catch (error) {
      console.error("Error during form submission:", error);
      setErrorMsg(error.message);
      setError(true);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Container>
      <FormContainer>
        <Title>Upload Invention</Title>
        <Form onSubmit={handleSubmit}>
          {/* Product Name */}
          <FormGroup>
            <Label htmlFor="productName">Product Name</Label>
            <VisibleInput
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          {/* Product Category */}
          <FormGroup>
            <Label htmlFor="productCategory">Product Category</Label>
            <VisibleInput
              type="text"
              id="productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          {/* Product Key Features */}
          <FormGroup>
            <Label htmlFor="keyFeatures">Product Key Features</Label>
            <Textarea
              id="keyFeatures"
              name="keyFeatures"
              value={formData.keyFeatures}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          {/* Product Key Benefits */}
          <FormGroup>
            <Label htmlFor="keyBenefits">Product Key Benefits</Label>
            <Textarea
              id="keyBenefits"
              name="keyBenefits"
              value={formData.keyBenefits}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          {/* Product Description */}
          <FormGroup>
            <Label htmlFor="productDescription">Product Description</Label>
            <Textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          {/* Technical Specifications */}
          <FormGroup>
            <Label>Technical Specification</Label>
            <TechnicalSpecsGroup>
              <VisibleInput
                type="text"
                placeholder="Size"
                name="size"
                value={formData.size}
                onChange={handleInputChange}
              />
              <VisibleInput
                type="text"
                placeholder="Weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
              />
            </TechnicalSpecsGroup>
            <VisibleInput
              type="text"
              placeholder="Material Used"
              name="materialUsed"
              value={formData.materialUsed}
              onChange={handleInputChange}
              style={{ marginTop: "1rem" }}
            />
          </FormGroup>

          {/* Product Image Upload */}
          <FormGroup>
            <Label htmlFor="imageUpload">Product Image</Label>
            {/* Hidden input for Image */}
            <HiddenInput
              type="file"
              id="imageUpload"
              name="image" // Added name attribute
              accept="image/*"
              onChange={(e) => handleFileChange(e, setImageFile)}
              required
            />

            {/* Custom styled upload area */}
            <UploadArea
              onClick={() => document.getElementById("imageUpload").click()}
            >
              <ImageIconStyled />
              <UploadText>
                {imageFile
                  ? `Selected File: ${imageFile.name}`
                  : "Click or drag and drop to upload Product Image"}
              </UploadText>
            </UploadArea>
          </FormGroup>

          {/* Product Video Upload */}
          <FormGroup>
            <Label htmlFor="videoUpload">Product Video (Optional)</Label>
            {/* Hidden input for Video */}
            <HiddenInput
              type="file"
              id="videoUpload"
              name="video"
              accept="video/*"
              onChange={(e) => handleFileChange(e, setVideoFile)}
            />

            {/* Custom styled upload area */}
            <UploadArea
              onClick={() => document.getElementById("videoUpload").click()}
            >
              <VideoIconStyled />
              <UploadText>
                {videoFile
                  ? `Selected File: ${videoFile.name}`
                  : "Click or drag and drop to upload Product Video"}
              </UploadText>
            </UploadArea>
          </FormGroup>

          {/* 3D Model Upload */}
          <FormGroup>
            <Label htmlFor="threeDModel">Upload 3D Model (AR/VR)</Label>
            {/* Hidden input for 3D file */}
            <HiddenInput
              type="file"
              id="threeDModel"
              name="threeDModel"
              accept=".glb,.gltf"
              onChange={handle3DFileChange}
              required // Ensure this is required if necessary
            />

            {/* Custom styled upload area */}
            <UploadArea
              onClick={() => document.getElementById("threeDModel").click()}
            >
              <UploadIconStyled />
              <UploadText>
                {selected3DFile
                  ? `Selected File: ${selected3DFile}`
                  : "Click or drag and drop to upload 3D Model"}
              </UploadText>
            </UploadArea>
          </FormGroup>

          {/* Display error message if any */}
          {error && <ErrorMessage>{errorMsg}</ErrorMessage>}

          {/* Display success message if submission was successful */}
          {success && (
            <SuccessMessage>Invention uploaded successfully!</SuccessMessage>
          )}

          {/* Submit Button with Loading Indicator. add disabled={loading} to enable button for prod */}
          <SubmitButton type="submit" disabled>
            {loading ? "Submitting..." : "Submit Invention"}
          </SubmitButton>
        </Form>
      </FormContainer>
      <Footer />
    </Container>
  );
};

export default Upload;
