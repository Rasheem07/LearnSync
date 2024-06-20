"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Badge,
  BookDown,
  BookOpenCheck,
  Box,
  Brain,
  BrainCircuit,
  Building,
  ChevronLeft,
  Database,
  Headset,
  Laptop,
  Palette,
  ShieldAlert,
  Smartphone,
  Video,
  VideotapeIcon,
  Workflow,
  Wrench,
} from "lucide-react";
import React, { useState } from "react";

export default function Page() {
  const [learningStyles, setLearningStyles] = useState<string[]>([]);
  const [interests, setInterests] = useState<string[]>([]);
  const [skillLevel, setSkillLevel] = useState('Beginner')
  const [goals, setGoals] = useState<string[]>([]);

  const handleLearningStyle = (style: string) => {
    if (learningStyles.includes(style)) {
      setLearningStyles((prev) => prev.filter((item) => item !== style));
    } else {
      setLearningStyles((prev) => [...prev, style]);
    }
  };

  const handleInstrests = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests((prev) => prev.filter((item) => item !== interest));
    } else {
      setInterests((prev) => [...prev, interest]);
    }
  };

  const handleGoals = (goal: string) => {
    if (goals.includes(goal)) {
      setGoals((prev) => prev.filter((item) => item !== goal));
    } else {
      setGoals((prev) => [...prev, goal]);
    }
  };

  return (
    <div className="flex flex-col p-5 flex-1 overflow-y-scroll scrollbar">
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center">
          <ChevronLeft className="h-5 w-5" />
          Back
        </div>
        <div>
          <p className="text-zinc-500 font-medium">Step 04 / 04</p>
          Preferences
        </div>
      </div>
      <div className="flex flex-col mx-auto my-auto max-w-md md:max-w-[65%]">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">
          Tailor Your Learning Experience
        </h1>
        <p className="text-zinc-500 font-sans text-base mt-1">
          Select your preferences and goals to receive personalized course
          recommendations.
        </p>

        <form action="" className="mt-6 w-full flex flex-col gap-3.5">
          <div className="flex flex-col ">
            <label
              htmlFor=""
              className="font-medium text-zinc-500 text-base capitalize"
            >
              How Do You Like to Learn?
            </label>
            <div className="flex items-center gap-2.5 mt-2">
              <span
                onClick={() => handleLearningStyle("video")}
                className={`rounded-md shadow-inner py-1 px-3  text-base border transition  ${
                  learningStyles.includes("video")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <Video className="h-4 w-4 text-blue-500" /> Video
              </span>
              <span
                onClick={() => handleLearningStyle("live")}
                className={`rounded-md shadow-inner py-1 px-3  text-base border transition 
                 ${
                   learningStyles.includes("live")
                     ? "border-blue-500  bg-slate-200"
                     : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                 } flex items-center gap-0.5 cursor-pointer`}
              >
                <VideotapeIcon className="text-blue-500 h-4 w-4" /> Live
              </span>
              <span
                onClick={() => handleLearningStyle("reading")}
                className={`rounded-md shadow-inner py-1 px-3  text-base  border transition  ${
                  learningStyles.includes("reading")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <BookOpenCheck className="h-4 w-4 text-blue-500" /> Reading
              </span>
              <span
                onClick={() => handleLearningStyle("audio")}
                className={`rounded-md shadow-inner py-1 px-3  text-base transition border  
                 ${
                   learningStyles.includes("audio")
                     ? "border-blue-500  bg-slate-200"
                     : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                 } flex items-center gap-0.5 cursor-pointer`}
              >
                <Headset className="h-4 w-4 text-blue-500" /> Audio
              </span>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-medium text-zinc-500 text-base capitalize"
            >
              What Sparks Your Interest?
            </label>
            <div className="flex items-center flex-wrap gap-1 mt-2">
              <span
                onClick={() => handleInstrests("web dev")}
                className={`rounded-md shadow-inner py-1 px-3  text-base border transition  ${
                  interests.includes("web dev")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <Laptop className="h-4 w-4 text-blue-400" /> Web development
              </span>
              <span
                onClick={() => handleInstrests("app dev")}
                className={`rounded-md shadow-inner py-1 px-3  text-base border transition 
              ${
                interests.includes("app dev")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <Smartphone className="h-4 w-4 text-blue-400" /> App Development
              </span>
              <span
                onClick={() => handleInstrests("devops")}
                className={`rounded-md shadow-inner py-1 px-3  text-base  border transition  ${
                  interests.includes("devops")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <Wrench className="h-4 w-4 text-blue-400" /> DevOps
              </span>
              <span
                onClick={() => handleInstrests("UX/UI")}
                className={`rounded-md shadow-inner py-1 px-3  text-base transition border  
              ${
                interests.includes("UX/UI")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <Palette className="h-4 w-4 text-blue-400" /> UX/UI design
              </span>
              <span
                onClick={() => handleInstrests("cyber")}
                className={`rounded-md shadow-inner py-1 px-3  text-base  border transition  ${
                  interests.includes("cyber")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <ShieldAlert className="h-4 w-4 text-blue-500" /> Cyber secuirty
              </span>
              <span
                onClick={() => handleInstrests("data science")}
                className={`rounded-md shadow-inner py-1 px-3  text-base transition border  
              ${
                interests.includes("data science")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <Database className="h-4 w-4 text-blue-500" /> Data Science
              </span>
              <span
                onClick={() => handleInstrests("AI/ML")}
                className={`rounded-md shadow-inner py-1 px-3  text-base transition border  
              ${
                interests.includes("AI/ML")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <BrainCircuit className="h-4 w-4 text-blue-500" /> AI/ML
              </span>
              <span
                onClick={() => handleInstrests("other")}
                className={`rounded-md shadow-inner py-1 px-3  text-base transition border  
              ${
                interests.includes("other")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <Box className="h-4 w-4 text-blue-500" /> Other
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor=""
              className="font-medium text-zinc-500 text-base capitalize"
            >
              Where Are You on Your Journey?
            </label>
            <Select defaultValue="Beginner" value={skillLevel} onValueChange={setSkillLevel}>
              <SelectTrigger className="w-[120px] shadow-inner focus:ring-0 focus:ring-offset-0 text-base text-gray-900 border border-zinc-300 focus:outline-none user-select-none">
                <SelectValue placeholder="skill level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
                <SelectItem value="Expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor=""
              className="font-medium text-zinc-500 text-base capitalize"
            >
              What brings you to learnsync?
            </label>
            <div className="flex items-center flex-wrap gap-2 mt-2">
              <span
                onClick={() => handleGoals("courses")}
                className={`rounded-md shadow-inner py-1 px-3  text-base border transition  ${
                  goals.includes("courses")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <BookDown className="h-4 w-4 text-blue-500" /> Courses
              </span>
              <span
                onClick={() => handleGoals("jobs")}
                className={`rounded-md shadow-inner py-1 px-3  text-base border transition 
              ${
                goals.includes("jobs")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <Building className="h-4 w-4 text-blue-500" /> Jobs
              </span>
              <span
                onClick={() => handleGoals("knowledge")}
                className={`rounded-md shadow-inner py-1 px-3  text-base  border transition  ${
                  goals.includes("knowledge")
                    ? "border-blue-500  bg-slate-200"
                    : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
                } flex items-center gap-0.5 cursor-pointer`}
              >
                <Brain className="h-4 w-4 text-blue-500" /> Knowledge
              </span>
              <span
                onClick={() => handleGoals("projects")}
                className={`rounded-md shadow-inner py-1 px-3  text-base transition border  
              ${
                goals.includes("projects")
                  ? "border-blue-500  bg-slate-200"
                  : "bg-white text-gray-900 border-zinc-300 hover:border-blue-300 hover:bg-slate-100"
              } flex items-center gap-0.5 cursor-pointer`}
              >
                <Workflow className="h-4 w-4 text-blue-500" /> Projects
              </span>
            </div>
          </div>

          <button className="w-full rounded-md shadow-md bg-blue-500 text-white text-lg py-2 text-center mt-1 hover:bg-blue-400 max-w-max px-4">
            Continue to LearnSync
          </button>
        </form>
      </div>
    </div>
  );
}
