import React, { useState } from "react";
import styled from "styled-components";
import { Upload as UploadIcon } from "lucide-react";
import Footer from "../components/Footer";

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100%;
  padding: 20px;
  margin-top: 100px;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 100px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    margin-top: 100px;
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

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.4rem;
  }
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

  &:hover {
    border-color: #999;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const UploadText = styled.p`
  color: #666;
  margin-top: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
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

  &:hover {
    background-color: #00796b;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem;
  }
`;

const Upload = () => {
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleFileUpload = (type) => {
    console.log(`Uploading ${type}`);
  };

  return (
    <FormContainer>
      <Title>Upload Invention</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="productName">Product Name</Label>
          <Input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="productCategory">Product Category</Label>
          <Input
            type="text"
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleInputChange}
            required
          />
        </FormGroup>

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

        <FormGroup>
          <Label>Technical Specification</Label>
          <TechnicalSpecsGroup>
            <Input
              type="text"
              placeholder="Size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
            />
            <Input
              type="text"
              placeholder="Weight"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
            />
          </TechnicalSpecsGroup>
          <Input
            type="text"
            placeholder="Material Used"
            name="materialUsed"
            value={formData.materialUsed}
            onChange={handleInputChange}
            style={{ marginTop: "1rem" }}
          />
        </FormGroup>

        <FormGroup>
          <Label>Upload Product Picture</Label>
          <UploadArea onClick={() => handleFileUpload("picture")}>
            <UploadIcon size={48} color="#666" />
            <UploadText>
              Click or drag and drop to upload product picture
            </UploadText>
          </UploadArea>
        </FormGroup>

        <FormGroup>
          <Label>Upload Product Video</Label>
          <UploadArea onClick={() => handleFileUpload("video")}>
            <UploadIcon size={48} color="#666" />
            <UploadText>
              Click or drag and drop to upload product video
            </UploadText>
          </UploadArea>
        </FormGroup>

        <FormGroup>
          <Label>Upload Product Demo (AR/VR)</Label>
          <UploadArea onClick={() => handleFileUpload("demo")}>
            <UploadIcon size={48} color="#666" />
            <UploadText>
              Click or drag and drop to upload product demo
            </UploadText>
          </UploadArea>
        </FormGroup>

        <SubmitButton type="submit">Submit Product</SubmitButton>
      </Form>
      <Footer />
    </FormContainer>
  );
};

export default Upload;
