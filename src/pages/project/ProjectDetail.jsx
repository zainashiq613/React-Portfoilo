import React from 'react';
import Button from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router';
import { projects } from '../../data';

function ProjectDetail() {
  const { projectId } = useParams();

  const data = projects.filter((p) => p.id.toString() === projectId);

  const project = data[0];

  const navigation = useNavigate();

  return (
    <div className="pt-25 px-5 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col gap-3.5">
        <div>
          <Button
            onClick={() => navigation('/project')}
            icon={<FaArrowLeft />}
            position={'left'}
            cn={
              'text-sm !px-4 md:!px-7 md:text-base bg-transparent border border-primary !text-primary'
            }
            text={'Back to Projects'}
          />
        </div>
        <div>
          <div className="flex flex-col gap-6 lg:gap-12.5">
            {project?.detailImage && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.detailImage} alt="" />
              </div>
            )}
            {project?.overViewText && project?.overViewImage && (
              <div className="flex flex-col md:grid grid-cols-2 items-center gap-10 justify-between p-5 bg-[#E1E2E5] lg:p-19 rounded-2xl">
                <div className="">
                  <img className="w-full h-full" src={project?.overViewImage} alt="" />
                </div>
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-[#313D4F] font-bold text-2xl md:text-3xl lg:text-[40px]">
                      Product Overview
                    </h3>
                    <p className="w-[117px] max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                  </div>
                  <p className="max-w-[721px] text-sm lg:text-2xl font-medium text-[#313D4F]">
                    {project.overViewText}
                  </p>
                </div>
              </div>
            )}
            {project?.id === 7 && (
              <div className="flex flex-col gap-6 lg:gap-12.5">
                <div className="flex flex-col-reverse md:grid grid-cols-2 items-center gap-10 justify-between bg-[#36393C] p-5 lg:px-17.5 rounded-2xl">
                  <div className="">
                    <img className="w-full h-full" src="/dark-version-web.png" alt="" />
                  </div>
                  <div className="flex flex-col gap-3 md:gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-[40px]">
                        Dark Version Web App
                      </h3>
                      <p className="w-35 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="max-w-[480px] text-sm lg:text-xl xl:text-2xl font-medium text-white">
                      The dark version of the AI Marketplace web app offers a sleek, modern
                      interface optimized for low-light environments. It enhances focus, reduces eye
                      strain during long browsing sessions, and gives the platform a more
                      professional and premium look—ideal for developers, researchers, and business
                      users working late hours.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10 justify-between bg-[#36393C] p-5 lg:p-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Dark Version – Mobile App
                      </h3>
                      <p className="w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="text-sm md:text-base lg:text-2xl font-medium text-white">
                      The dark mode of the AI Marketplace mobile app delivers a smooth,
                      battery-efficient experience ideal for night-time use. It offers a modern and
                      immersive interface that reduces glare, improves readability, and ensures
                      comfortable usage during extended mobile sessions—without compromising on
                      usability or visual clarity.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/dark-version-mbl.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 items-center gap-10 justify-between bg-[#36393C] p-5 lg:px-17.5 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-[40px]">
                        Light Version Web App
                      </h3>
                      <p className="w-45 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="max-w-[480px] text-sm lg:text-xl xl:text-2xl font-medium text-white">
                      The light version of the web app offers a clean, minimal, and highly readable
                      interface designed for well-lit environments. It emphasizes clarity, visual
                      hierarchy, and accessibility—making it ideal for daytime browsing and
                      professional use.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/light-version-web.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10 justify-between bg-[#36393C] p-5 md:p-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Light Version – Mobile App
                      </h3>
                      <p className="w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="text-sm md:text-xl lg:text-2xl font-medium text-white">
                      The light mode on mobile provides a bright and fresh user experience optimized
                      for clarity and ease of navigation. It ensures content stands out, maintains a
                      lightweight feel, and enhances visibility during regular daytime use.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/light-version-mbl.png" alt="" />
                  </div>
                </div>
              </div>
            )}
            {project?.id === 9 && (
              <div className="flex flex-col items-center gap-10 justify-between bg-[#214B56] p-5 lg:p-10 rounded-2xl">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                      Mobile App
                    </h3>
                    <p className="w-23 max-w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
                  </div>
                  <p className="text-sm md:text-base lg:text-xl font-medium text-white">
                    The ShiftWorx mobile app is designed to simplify shift management for on-the-go
                    healthcare staff. With an intuitive and responsive interface, users can easily
                    view upcoming shifts, accept or decline new assignments, request swaps, and stay
                    updated through real-time notifications.
                  </p>
                </div>
                <div className="">
                  <img className="w-full h-full" src="/shiftworx-mbl.png" alt="" />
                </div>
              </div>
            )}
            {project?.id === 10 && (
              <div className="flex flex-col gap-6 lg:gap-12.5">
                <div className="flex flex-col items-center gap-10 justify-between bg-[#214B56] p-5 md:p-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Vendor Flow
                      </h3>
                      <p className="w-24 md:w-30 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="text-sm md:text-base lg:text-xl font-medium text-white">
                      The vendor flow is designed for individuals or service providers who offer
                      specific services such as home repairs, beauty treatments, or catering.
                      Vendors can register, set availability, list their services, manage bookings,
                      respond to inquiries, and track earnings. The interface makes it easy to stay
                      connected with clients, update service status, and build a trustworthy
                      presence on the platform.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/vendor-flow.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10 justify-between bg-[#214B56] p-5 md:p-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Businesses Flow
                      </h3>
                      <p className="w-30 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="text-sm md:text-base lg:text-xl font-medium text-white">
                      The business flow is tailored for shop owners or product-based businesses. It
                      allows them to create a branded storefront, upload product listings, manage
                      inventory, process orders, offer delivery or pickup options, and monitor
                      performance through insights. This flow helps local businesses grow their
                      digital footprint and reach more customers within the Seychelles community.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/business-flow.png" alt="" />
                  </div>
                </div>
              </div>
            )}
            {project?.websiteDesignImg && (
              <div className="grid md:grid-cols-2 md:flex-row items-center gap-10 justify-between bg-[#214B56] p-5 lg:px-17.5 rounded-2xl">
                <div className="flex flex-col gap-3 md:gap-6">
                  <div>
                    <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-[40px]">
                      Website Design
                    </h3>
                    <p className="w-30 lg:w-40 max-w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
                  </div>
                  <p className="max-w-[480px] text-sm lg:text-base font-medium text-white">
                    {project?.websiteDesignText}
                  </p>
                </div>
                <div className="">
                  <img className="w-full h-full" src={project?.websiteDesignImg} alt="" />
                </div>
              </div>
            )}
            {project?.id === 1 && (
              <div className="flex flex-col gap-6 lg:gap-12.5">
                <div className="flex flex-col items-center gap-10 justify-between bg-[#214B56] p-5 lg:p-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Merchant Mobile App
                      </h3>
                      <p className="w-35 md:w-45 max-w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="text-sm font-medium md:text-base lg:text-2xl text-white">
                      The app is built for ease and speed, allowing merchants to create orders,
                      track deliveries, and manage reports on the go. With simple UI and real-time
                      updates, it keeps everything at their fingertips.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src={project?.merchantApp} alt="" />
                  </div>
                </div>
                <div className="flex flex-col items-center gap-10 justify-between bg-[#214B56] p-5 lg:p-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Rider Mobile App
                      </h3>
                      <p className="w-30 max-w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="text-sm font-medium md:text-base lg:text-2xl text-white">
                      Designed for fast and reliable deliveries, the rider app lets drivers view
                      assigned tasks, update delivery status, and track earnings in real time -- all
                      through a simple and easy-to-use interface.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src={project?.riderApp} alt="" />
                  </div>
                </div>
                <div className="flex flex-col-reverse md:grid grid-cols-2 items-center gap-10 justify-between bg-[#214B56] p-5 lg:px-17.5 rounded-2xl">
                  <div className="">
                    <img className="w-full h-full" src={project?.merchantDashboard} alt="" />
                  </div>
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-[40px]">
                        Merchant Dashboard
                      </h3>
                      <p className="w-[165px] border-2 lg:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="max-w-[480px] text-sm font-medium lg:text-xl xl:text-2xl text-white">
                      The dashboard gives merchants full control over their deliveries, payments,
                      and reports. With features like bulk order uploads, real-time tracking, and
                      role-based access, it simplifies daily operations from one place.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:grid grid-cols-2 items-center gap-10 justify-between bg-[#214B56] p-5 lg:px-17.5 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl lg:text-3xl xl:text-[40px]">
                        Admin Dashboard
                      </h3>
                      <p className="w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="max-w-[480px] text-sm lg:text-base xl:text-2xl font-medium text-white">
                      The admin dashboard provides full system control, allowing management of
                      users, deliveries, payments, and reports. It ensures smooth operations through
                      real-time monitoring and complete oversight of the entire platform.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src={project?.adminDashboard} alt="" />
                  </div>
                </div>
              </div>
            )}
            {project?.id === 2 && (
              <div className="flex flex-col gap-6 lg:gap-12.5">
                <div className="flex flex-col md:grid grid-cols-2 items-center gap-10 justify-between bg-[#214B56] p-5 lg:px-17.5 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[40px]">
                        Dashboard
                      </h3>
                      <p className="w-25 md:w-33 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <p className="max-w-[480px] text-sm md:text-base xl:text-2xl font-medium text-white">
                      The Pickup Pointe dashboard was designed with clarity and usability in mind.
                      It features a clean, minimal layout with intuitive navigation, making it easy
                      for vendors and admins to access key actions like order tracking, product
                      management, and performance insights—all without overwhelming the user.
                    </p>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/pickup-dashboard.png" alt="" />
                  </div>
                </div>
                <div className="flex flex-col gap-5 lg:gap-10 justify-between bg-[#214B56] p-5 md:p-10 lg:p-25 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-white font-bold text-2xl md:text-3xl lg:text-[40px]">
                        Website
                      </h3>
                      <p className="w-16 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                  </div>
                  <div className="">
                    <img className="w-full h-full" src="/pickup-landing.png" alt="" />
                  </div>
                </div>
              </div>
            )}
            {project?.fullWebImage && (
              <div className="bg-[#214B56] p-5 lg:p-25 rounded-2xl">
                <img src={project?.fullWebImage} alt="" />
              </div>
            )}
            {project?.id === 3 && (
              <div className="rounded-2xl">
                <img src="/peach-landing.png" alt="" />
              </div>
            )}
            {project?.problemsImage && project?.problemsText && (
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-between bg-[#E1E2E5] p-5 lg:p-10 xl:p-19 rounded-2xl">
                <div className="flex flex-col gap-3 md:gap-6">
                  <div>
                    <h3 className="text-[#313D4F] font-bold text-2xl md:text-3xl lg:text-[40px]">
                      Problems
                    </h3>
                    <p className="w-22 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                  </div>
                  <p className="md:max-w-[400px] lg:max-w-[600px] text-sm md:text-base xl:text-xl text-[#313D4F]">
                    {project?.problemsText}
                  </p>
                </div>
                <div className="w-[330px] h-[250px]">
                  <img className="w-full h-full" src={project?.problemsImage} alt="" />
                </div>
              </div>
            )}
            {project?.designImage && (
              <div className="flex flex-col items-center gap-5.5 md:gap-10 bg-[#E1E2E5] p-5 lg:p-19 rounded-2xl">
                <div className="w-full flex flex-col gap-5.5">
                  <div>
                    <h3 className="text-[#313D4F] font-bold text-2xl md:text-3xl lg:text-[40px]">
                      Design Process
                    </h3>
                    <p className="w-30 max-w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
                  </div>
                </div>
                <div>
                  <img className="w-full h-full" src={project?.designImage} alt="" />
                </div>
              </div>
            )}
            {project?.empathyImage && project?.empathyText && (
              <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-between bg-[#E1E2E5] p-5 lg:p-19 rounded-2xl">
                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="text-[#313D4F] font-bold text-2xl md:text-3xl lg:text-[40px]">
                      Empathy Map
                    </h3>
                    <p className="w-28 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                  </div>
                  <p className="max-w-[440px] text-sm lg:text-2xl text-[#313D4F]">
                    {project?.empathyText}
                  </p>
                </div>
                <div className="max-w-[400px]">
                  <img className="w-full h-full" src={project?.empathyImage} alt="" />
                </div>
              </div>
            )}
            {project?.userImage &&
              project?.userBio &&
              project?.userData &&
              project?.userNeeds &&
              project?.painPoints &&
              project?.userGoals && (
                <div className="flex flex-col gap-7 bg-[#E1E2E5] p-5 lg:px-15.5 lg:py-10 rounded-2xl">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h3 className="text-[#313D4F] font-bold text-2xl md:text-3xl lg:text-[40px]">
                        User Persona
                      </h3>
                      <p className="w-28 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                  </div>
                  <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-[#98B4AA29] rounded-2xl p-5 flex flex-col gap-7.5">
                      <img src={project?.userImage} className="h-45" alt="" />
                      <table>
                        <tbody className="flex flex-col gap-3">
                          {project?.userData.map((item) => (
                            <tr className="grid grid-cols-2" key={item?.id}>
                              <td className="font-bold text-xs lg:text-sm text-[#193767]">
                                {item?.key}:
                              </td>
                              <td className="text-[#5E6B81] text-xs font-medium lg:text-sm xl:text-base">
                                {item?.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-8 gap-5 grid grid-cols-12">
                      <div className="col-span-12 lg:col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                        <h3 className="text-base text-[#193767] font-bold">Bio</h3>
                        <p className="text-[#5E6B81] text-xs lg:text-sm font-medium">
                          {project?.userBio}
                        </p>
                      </div>
                      <div className="col-span-12 lg:col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                        <h3 className="text-base text-[#193767] font-bold">Needs</h3>
                        <ul className="text-[#5E6B81] text-xs md:text-sm ml-6 list-disc">
                          {project?.userNeeds.map((item) => (
                            <li key={item.id}>{item.text}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-12 lg:col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                        <h3 className="text-base text-[#193767] font-bold">Pain Points</h3>
                        <ul className="text-[#5E6B81] text-xs md:text-sm ml-5 list-disc">
                          {project?.painPoints.map((item) => (
                            <li key={item.id}>{item.text}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-span-12 lg:col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                        <h3 className="text-base text-[#193767] font-bold">Goals</h3>
                        <ul className="text-[#5E6B81] text-xs md:text-sm ml-5 list-disc">
                          {project?.userGoals.map((item) => (
                            <li key={item.id}>{item.text}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            {project?.primaryColor && project?.otherColor && (
              <div className="bg-[#E1E2E5] p-5 md:py-9 lg:px-26 rounded-2xl">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                  <div className="flex flex-col gap-3 md:gap-10">
                    <div>
                      <h3 className="text-[#313D4F] font-bold text-2xl lg:text-[40px]">
                        Style Guide
                      </h3>
                      <p className="w-22 max-w-[165px] border-2 md:border-3 rounded-2xl border-[#4FBDD2]"></p>
                    </div>
                    <div>
                      <p className="text-lg md:text-3xl font-bold text-dark-text">Colors</p>
                      <hr className="bg-[#2B2B2B] md:w-[300px] h-0.5 my-3 md:my-7.5" />
                      <div className="flex flex-col gap-5.5">
                        <div className="flex flex-col gap-3.5">
                          <p className="text-xl md:text-2xl text-black font-medium">
                            Primary Color
                          </p>
                          <div className="flex gap-5.5">
                            {project?.primaryColor.map((item) => (
                              <div key={item?.id} className="flex flex-col items-center gap-2">
                                <span
                                  style={{ background: item?.color }}
                                  className="rounded border-5 border-[#ECECEC] block w-10 h-10 md:w-16 md:h-16"
                                ></span>
                                <p className="text-xs text-[#25282B]">{item?.title}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-col gap-3.5">
                          <p className="text-xl md:text-2xl text-black font-medium">Other Color</p>
                          <div className="flex gap-5.5">
                            {project?.otherColor.map((item) => (
                              <div key={item?.id} className="flex flex-col items-center gap-2">
                                <span
                                  style={{ background: item?.color }}
                                  className="rounded border-5 border-[#ECECEC] block w-10 md:w-10 h-10 md:h-10"
                                ></span>
                                <p className="text-xs text-[#25282B]">{item?.title}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-12 flex flex-col gap-3 md:gap-5">
                    <h3 className="text-3xl font-bold text-[#181818]">Typography</h3>
                    <p className="w-full px-4 text-2xl py-2 md:py-5 font-medium text-[#181818] border-y border-[#2B2B2B]">
                      Otterco Display
                    </p>
                    <div className="mt-5 flex flex-col gap-3 md:gap-5">
                      <div className="items-center gap-7 w-full grid grid-cols-2 border">
                        <p className="text-[#181818] text-3xl font-medium">Big Title </p>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#181818] text-[10px]">Weight: Bold</p>
                          <p className="text-[#181818] text-[10px]">Size: 64px</p>
                        </div>
                      </div>
                      <div className="items-center gap-7 w-full grid grid-cols-2 border">
                        <p className="text-[#181818] text-2xl">Title</p>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#181818] text-[10px]">Weight: Bold</p>
                          <p className="text-[#181818] text-[10px]">Size: 40px</p>
                        </div>
                      </div>
                      <div className="items-center gap-7 w-full grid grid-cols-2 border">
                        <p className="text-[#181818] text-base">Button</p>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#181818] text-[10px]">Weight: Bold</p>
                          <p className="text-[#181818] text-[10px]">Size: 20px</p>
                        </div>
                      </div>
                      <div className="items-center gap-7 w-full grid grid-cols-2 border">
                        <p className="text-[#181818] text-[10px] font-medium">Text</p>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#181818] text-[10px]">Weight: Reguler</p>
                          <p className="text-[#181818] text-[10px]">Size: 18px</p>
                        </div>
                      </div>
                      <div className="items-center gap-7 w-full grid grid-cols-2 border">
                        <p className="text-[#181818] text-xs font-medium">Medium Text</p>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#181818] text-[10px]">Weight: Medium</p>
                          <p className="text-[#181818] text-[10px]">Size: 16px</p>
                        </div>
                      </div>
                      <div className="items-center gap-7 w-full grid grid-cols-2 border">
                        <p className="text-[#181818] text-base">Big Text</p>
                        <div className="flex flex-col gap-1.5">
                          <p className="text-[#181818] text-[10px]">Weight: Regular</p>
                          <p className="text-[#181818] text-[10px]">Size: 22px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {project?.songs && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.songs} alt="" />
              </div>
            )}
            {project?.screen && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.screen} alt="" />
              </div>
            )}
            {project?.colorScheme && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.colorScheme} alt="" />
              </div>
            )}
            {project?.fontImg && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.fontImg} alt="" />
              </div>
            )}
            {project?.iconsImg && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.iconsImg} alt="" />
              </div>
            )}
            {project?.architecture && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.architecture} alt="" />
              </div>
            )}
            {project?.mblScreen && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.mblScreen} alt="" />
              </div>
            )}
            {project?.mblLogin && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.mblLogin} alt="" />
              </div>
            )}
            {project?.menuImg && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.menuImg} alt="" />
              </div>
            )}
            {project?.explore && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.explore} alt="" />
              </div>
            )}
            {project?.findArtist && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.findArtist} alt="" />
              </div>
            )}
            {project?.featuredArtist && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.featuredArtist} alt="" />
              </div>
            )}
            {project?.albumView && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.albumView} alt="" />
              </div>
            )}
            {project?.playingScreen && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.playingScreen} alt="" />
              </div>
            )}
            {project?.chromeCast && (
              <div className="w-full rounded-2xl bg-[#E1E2E5]">
                <img className="w-full h-[22%]" src={project?.chromeCast} alt="" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
