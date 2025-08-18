import React from 'react';
import Button from '../../components/Button';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const userData = [
  { id: 1, key: 'NAME', value: 'Adeel Ahmed' },
  { id: 2, key: 'AGE', value: 35 },
  { id: 3, key: 'Role', value: 'University of Calgary' },
  { id: 4, key: 'JOB', value: 'Online clothing store' },
  { id: 5, key: 'LOCATION', value: 'Calgary, Alberta' },
  { id: 6, key: 'HOBBIES', value: 'Hiking and dancing' },
];

function ProjectDetail() {
  const navigation = useNavigate();
  return (
    <div className="pt-25 px-5 flex justify-center">
      <div className="max-w-[1280px] w-full flex flex-col gap-3.5">
        <div>
          <Button
            onClick={() => navigation('/project')}
            icon={<FaArrowLeft />}
            position={'left'}
            cn={'bg-transparent border border-primary !text-primary'}
            text={'Back to Projects'}
          />
        </div>
        <div className="flex flex-col gap-12.5">
          <div className="w-full h-[592px] rounded-2xl bg-[#E1E2E5]">
            <img className="w-full h-full" src="/29.png" alt="" />
          </div>
          <div className="flex items-center gap-3 justify-between bg-[#E1E2E5] p-19 rounded-2xl">
            <div className="">
              <img className="w-full h-full" src="/overview.png" alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#313D4F] font-bold text-[40px]">Product Overview</h3>
                <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
              </div>
              <p className="max-w-[721px] text-2xl font-medium text-[#313D4F]">
                Pickup Pointe is a community-based delivery and pickup platform that connects local
                shoppers with nearby vendors. Designed to simplify the local ordering experience,
                the platform allows users to browse and purchase fresh, locally made products for
                pickup or delivery. Vendors can manage their inventory, track orders, and access
                customer insights through a dedicated dashboard, while admins oversee user activity
                and platform performance. With a focus on ease, transparency, and community support,
                Pickup Pointe brings local commerce online in a friendly and functional way.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-between bg-[#214B56] px-17.5 rounded-2xl">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-white font-bold text-[40px]">Dashboard</h3>
                <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
              </div>
              <p className="max-w-[480px] text-2xl font-medium text-white">
                The Pickup Pointe dashboard was designed with clarity and usability in mind. It
                features a clean, minimal layout with intuitive navigation, making it easy for
                vendors and admins to access key actions like order tracking, product management,
                and performance insights—all without overwhelming the user.
              </p>
            </div>
            <div className="">
              <img className="w-full h-full" src="/dashboard.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-10 bg-[#214B56] p-25 rounded-2xl">
            <div>
              <h3 className="text-white font-bold text-[40px]">Website</h3>
              <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
            </div>
            <div className="">
              <img className="w-full h-full" src="/landing.png" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#E1E2E5] p-19 rounded-2xl">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#313D4F] font-bold text-[40px]">Problems</h3>
                <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
              </div>
              <p className="max-w-[721px] text-2xl text-[#313D4F]">
                Before Pickup Pointe, users faced difficulties in finding and connecting with
                reliable local vendors. There was no unified platform to browse local products,
                compare options, or place quick orders for pickup or delivery. Vendors also
                struggled with managing orders and visibility due to the lack of a digital system,
                leading to missed opportunities and limited customer reach.
              </p>
            </div>
            <div className="w-[330px] h-[300px]">
              <img className="w-full h-full" src="/problem.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-5.5 bg-[#E1E2E5] p-19 rounded-2xl">
            <div className="w-full flex flex-col gap-5.5">
              <div>
                <h3 className="text-[#313D4F] font-bold text-[40px]">Design Process</h3>
                <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
              </div>
            </div>
            <div className="w-[923px] h-[535px]">
              <img className="w-full h-full" src="/design.png" alt="" />
            </div>
          </div>
          <div className="flex items-center justify-between bg-[#E1E2E5] p-19 rounded-2xl">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#313D4F] font-bold text-[40px]">Empathy Map</h3>
                <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
              </div>
              <p className="max-w-[440px] text-2xl text-[#313D4F]">
                To better understand our users and solve their real problems, we created an empathy
                map based on user research and interviews.
              </p>
            </div>
            <div className="">
              <img className="w-full h-full" src="/empathy.png" alt="" />
            </div>
          </div>
          <div className="flex flex-col gap-7 bg-[#E1E2E5] px-15.5 py-10 rounded-2xl">
            <div className="flex flex-col gap-6">
              <div>
                <h3 className="text-[#313D4F] font-bold text-[40px]">User Persona</h3>
                <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-4 bg-[#98B4AA29] rounded-2xl p-5 flex flex-col gap-7.5">
                <img src="/user.png" className="h-45" alt="" />
                <table>
                  <tbody className="flex flex-col gap-3">
                    {userData.map((item) => (
                      <tr className="grid grid-cols-2" key={item.id}>
                        <td className="font-bold text-base text-[#193767]">{item.key}:</td>
                        <td className="text-[#5E6B81] font-medium text-base">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="col-span-8 gap-5 grid grid-cols-12">
                <div className="col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                  <h3 className="text-xl text-[#193767] font-bold">Bio</h3>
                  <p className="text-[#5E6B81] text-base font-medium">
                    Ahmed Raza, a 34-year-old vendor from Karachi, runs a small shop and manages
                    local deliveries. He struggles with delayed payments, manual reporting, and poor
                    tracking. He’s looking for a simple, transparent system to manage orders and
                    grow his business efficiently.
                  </p>
                </div>
                <div className="col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                  <h3 className="text-xl text-[#193767] font-bold">Needs</h3>
                  <ul className="text-[#5E6B81] ml-5 list-disc">
                    <li>A unified dashboard to monitor everything</li>
                    <li>Transparent payment and delivery status</li>
                    <li>Automated reports and insights</li>
                    <li>Easy order and inventory management</li>
                  </ul>
                </div>
                <div className="col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                  <h3 className="text-xl text-[#193767] font-bold">Pain Points</h3>
                  <ul className="text-[#5E6B81] ml-5 list-disc">
                    <li>Frequent delays in receiving payments</li>
                    <li>No trust in current delivery tracking system</li>
                    <li>Has to call support too often for updates</li>
                    <li>Lacks a central platform to manage everything</li>
                  </ul>
                </div>
                <div className="col-span-6 px-3 rounded-2xl py-4.5 bg-[#98B4AA29] flex flex-col gap-3">
                  <h3 className="text-xl text-[#193767] font-bold">Goals</h3>
                  <ul className="text-[#5E6B81] ml-5 list-disc">
                    <li>Track deliveries in real-time without relying on support</li>
                    <li>Get faster COD (Cash on Delivery) payments</li>
                    <li>Gain control over team and logistics</li>
                    <li>Reduce dependency on manual reporting tools like Excel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#E1E2E5] py-9 px-26 rounded-2xl">
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-10">
                <div>
                  <h3 className="text-[#313D4F] font-bold text-[40px]">Style Guide</h3>
                  <p className="w-[165px] border-3 rounded-2xl border-[#4FBDD2]"></p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-dark-text">Colors</p>
                  <hr className="bg-[#2B2B2B] w-[360px] h-0.5 my-7.5" />
                  <div className="flex flex-col gap-5.5">
                    <div className="flex flex-col gap-3.5">
                      <p className="text-2xl text-black font-medium">Primary Color</p>
                      <div className="flex gap-5.5">
                        <div className="flex flex-col gap-2">
                          <span className="bg-[#F14445] rounded border-5 border-[#ECECEC] block w-16 h-16"></span>
                          <p className="text-sm text-[#25282B]">F14445</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="bg-[#111315] rounded border-5 border-[#ECECEC] block w-16 h-16"></span>
                          <p className="text-sm text-[#25282B]">2E2A2A</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="bg-[#1A1E22] rounded border-5 border-[#ECECEC] block w-16 h-16"></span>
                          <p className="text-sm text-[#25282B]">1A1E22</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3.5">
                      <p className="text-2xl text-black font-medium">Other Color</p>
                      <div className="flex gap-5.5">
                        <div className="flex flex-col gap-2">
                          <span className="bg-[#9B9C9E] rounded border-5 border-[#ECECEC] block w-16 h-16"></span>
                          <p className="text-sm text-[#25282B]">9B9C9E</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="bg-[#D4D4D4] rounded border-5 border-[#ECECEC] block w-16 h-16"></span>
                          <p className="text-sm text-[#25282B]">D4D4D4</p>
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="bg-[#FFFFFF] rounded border-5 border-[#ECECEC] block w-16 h-16"></span>
                          <p className="text-sm text-[#25282B]">FFFFFF</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-12 flex flex-col gap-5">
                <h3 className="text-3xl font-bold text-[#181818]">Typography</h3>
                <p className="w-fit px-4 text-2xl py-5 font-medium text-[#181818] border-y border-[#2B2B2B]">
                  Otterco Display
                </p>
                <div className="mt-5 flex flex-col gap-5">
                  <div className="items-center gap-7 w-[300px] grid grid-cols-2 border">
                    <p className="text-[#181818] text-3xl font-medium">Big Title </p>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[#181818] text-[10px]">Weight: Bold</p>
                      <p className="text-[#181818] text-[10px]">Size: 64px</p>
                    </div>
                  </div>
                  <div className="items-center gap-7 w-[300px] grid grid-cols-2 border">
                    <p className="text-[#181818] text-2xl">Title</p>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[#181818] text-[10px]">Weight: Bold</p>
                      <p className="text-[#181818] text-[10px]">Size: 40px</p>
                    </div>
                  </div>
                  <div className="items-center gap-7 w-[300px] grid grid-cols-2 border">
                    <p className="text-[#181818] text-base">Button</p>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[#181818] text-[10px]">Weight: Bold</p>
                      <p className="text-[#181818] text-[10px]">Size: 20px</p>
                    </div>
                  </div>
                  <div className="items-center gap-7 w-[300px] grid grid-cols-2 border">
                    <p className="text-[#181818] text-[10px] font-medium">Text</p>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[#181818] text-[10px]">Weight: Reguler</p>
                      <p className="text-[#181818] text-[10px]">Size: 18px</p>
                    </div>
                  </div>
                  <div className="items-center gap-7 w-[300px] grid grid-cols-2 border">
                    <p className="text-[#181818] text-xs font-medium">Medium Text</p>
                    <div className="flex flex-col gap-1.5">
                      <p className="text-[#181818] text-[10px]">Weight: Medium</p>
                      <p className="text-[#181818] text-[10px]">Size: 16px</p>
                    </div>
                  </div>
                  <div className="items-center gap-7 w-[300px] grid grid-cols-2 border">
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
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
