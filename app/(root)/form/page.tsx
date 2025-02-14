"use client";

import React, { useState, useEffect } from "react";
import { Form, Input, Upload, message, UploadFile } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const { TextArea } = Input;


const ProfileForm: React.FC = () => {



    const [form] = Form.useForm();
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isFormValid, setIsFormValid] = useState<boolean>(false);
    const [isImageUploaded, setIsImageUploaded] = useState<boolean>(false);

    useEffect(() => {
        const savedFormData = localStorage.getItem("profileFormData");
        if (savedFormData) {
            const parsedFormData = JSON.parse(savedFormData);
            form.setFieldsValue(parsedFormData);
            if (parsedFormData.profilePictureUrl) {
                setImageUrl(parsedFormData.profilePictureUrl);
                setIsImageUploaded(true);
            }
            setFileList([]);
        }
        
    }, [form]); 
    

    const handleUpload = async ({ fileList }: { fileList: UploadFile[] }) => {
    
        setFileList(fileList);
        form.setFieldsValue({ profilePicture: fileList });
    
        if (fileList.length > 0) {
            const file = fileList[0].originFileObj;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "ticket");
    
            try {
                const response = await axios.post(
                    "https://api.cloudinary.com/v1_1/dqt6ttewe/image/upload",
                    formData
                );
                const imageUrl = response.data.secure_url;
    
                
                setImageUrl(imageUrl);
                form.setFieldsValue({ profilePictureUrl: imageUrl });
    
                const updatedData = {
                    ...form.getFieldsValue(),
                    profilePictureUrl: imageUrl,
                };
                localStorage.setItem("profileFormData", JSON.stringify(updatedData));
    
                message.success("Image uploaded successfully!");
            } catch (error) {
                message.error("Image upload failed!");
                console.error("❌ Image upload error:", error);
            }
        }
    };
    
    

    const handleSubmit = (values: { profilePicture: UploadFile[]; profilePictureUrl: string; name: string; email: string; about: string }) => {
        message.success("Form submitted successfully!");
        localStorage.removeItem("profileFormData");
    };

    const saveFormDataToLocalStorage = (data: { profilePicture: UploadFile[]; profilePictureUrl: string; name: string; email: string; about: string }) => {
        localStorage.setItem("profileFormData", JSON.stringify(data));
        
    };

    const handleFormChange = () => {
        const formData = form.getFieldsValue();
        saveFormDataToLocalStorage(formData); 
        
        form.validateFields()
            .then(() => setIsFormValid(true))
            .catch(() => setIsFormValid(false));
    };
    


    return (
        <div className="w-full max-w-[90%] sm:max-w-[700px] min-h-auto p-4 sm:p-8 bg-[#041e22] rounded-[20px] sm:rounded-[40px] border border-[#0e464f] flex flex-col justify-center items-center gap-3 sm:gap-4 ">
            <div className="w-full max-w-xl flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h2 className="text-white text-2xl font-normal font-['JejuMyeongjo']">Attendee Details</h2>
                    <span className="text-neutral-50 text-base font-normal">Step 2/3</span>
                </div>
                <div className="w-full h-1 bg-[#0E464F]">
                    <div className="w-1/2 h-full bg-[#24A0B5]"></div>
                </div>
            </div>
            <div className="w-full max-w-xl bg-[#08252b] p-6 rounded-3xl border border-[#0e464e] mt-8">
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                    autoComplete="off"
                    onValuesChange={handleFormChange}
                >
                    <Form.Item
                        label={<span className="text-neutral-50 text-base font-normal">Upload Profile Photo</span>}
                        name="profilePicture"
                        rules={[{ required: true, message: "Please upload your profile picture!" }]}
                    >
                        <div className="h-[328px] px-6 pt-6 pb-12 bg-[#042127] rounded-3xl border border-[#07363e] flex flex-col justify-start items-center gap-8">
                            <span className="text-neutral-50 text-base font-normal text-center">Upload Profile Photo</span>
                            <div className="w-60 h-60 p-6 bg-[#0e464e] rounded-[32px] border-4 border-[#23a0b5]/50 flex flex-col justify-center items-center">
                                <Upload.Dragger
                                    name="file"
                                    fileList={fileList}
                                    beforeUpload={() => false}
                                    onChange={handleUpload}
                                    accept="image/*"
                                    className="w-full h-full flex flex-col justify-center items-center cursor-pointer"
                                >
                                    {imageUrl ? (
                                        <Image src={imageUrl} alt="Profile" layout="fill" objectFit="cover" className="rounded-[32px]" />
                                    ) : (
                                        <>
                                            <CloudDownloadOutlined className="text-white text-3xl" />
                                            <p className="text-neutral-50 text-base mt-2">Drag & drop or click to upload</p>
                                        </>
                                    )}
                                </Upload.Dragger>
                            </div>
                        </div>
                    </Form.Item>
                    <div className="w-full pb-8">
                        <svg className="w-full h-1 sm:h-2" viewBox="0 0 556 4" xmlns="http://www.w3.org/2000/svg">
                            <rect width="100%" height="100%" fill="#07373F" />
                        </svg>
                    </div>
                    <Form.Item
                        label={<span className="text-neutral-50 text-base font-normal">Enter your name</span>}
                        name="name"
                        rules={[{ required: true, message: "Please enter your full name!" }]}
                    >
                        <Input placeholder="Enter your full name" className="!bg-[#0e464e] !bg-transparent border rounded-xl !border-[#07363e] !text-white !p-3 !placeholder-white" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-neutral-50 text-base font-normal">Enter your email *</span>}
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email!" },
                            { type: "email", message: "Please enter a valid email!" },
                        ]}
                    >
                        <Input placeholder="hello@avioflagos.io" className=" !bg-[#0e464e] !bg-transparent border rounded-xl !border-[#07363e] !text-white !p-3 !placeholder-white" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="text-neutral-50 text-base font-normal">Special request?</span>}
                        name="about"
                        rules={[{ required: true, message: "Please write something about yourself!" }]}
                    >
                        <TextArea rows={4} placeholder="Textarea" className=" !bg-[#0e464e] !bg-transparent !text-white p-3 h-[159px] border rounded-xl !border-[#07363e] !placeholder-white"/>
                    </Form.Item>


                    <div className="flex flex-col sm:flex-row gap-7 py-8">
                        <Link href="/" className="flex-1" >
                            <div>
                                <button
                                    className="w-full px-6 py-3 rounded-lg border border-[#23a0b5] text-white hover:bg-[#23a0b5]" 
                                >
                                    Back
                                </button>
                            </div>
                        </Link>
                            

                        <Link href="/ticket" className="flex-1">
                            <button 
                                className="w-full px-6 py-3 rounded-lg border border-[#23a0b5] text-white hover:bg-[#23a0b5]" 
                                onClick={() => {
                                    const formData = form.getFieldsValue();
                                    if (!formData.profilePictureUrl && imageUrl) {
                                        formData.profilePictureUrl = imageUrl;
                                        console.log("Before navigation:", localStorage.getItem("profileFormData"));

                                    }
                                    console.log("🔵 Saving form data before navigation:", formData);
                                    localStorage.setItem("profileFormData", JSON.stringify(formData));
                                }}
                            >
                                Get My Free Ticket
                            </button>
                        </Link>
                </div>

                </Form>
            </div>
        </div>
    );
};

export default ProfileForm;

