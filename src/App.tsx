import React, { useEffect, useState, useRef } from 'react';
import { Factory, Warehouse, Truck, Database, Shield, FileText, CheckCircle, BarChart3, Users, Zap, Activity } from 'lucide-react';

const Box = ({ children, title, className = "" }: { children: React.ReactNode, title?: React.ReactNode, className?: string }) => (
  <div className={`relative border border-[#1e3a8a]/50 bg-[#081533]/80 p-4 ${className} shadow-[inset_0_0_20px_rgba(30,58,138,0.5)] flex flex-col group`}>
    {/* Decorative corners */}
    <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[#00d2ff]/80 transition-all duration-300">
       <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
    </div>
    <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-[#00d2ff]/80 transition-all duration-300">
       <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
    </div>
    <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-[#00d2ff]/80 transition-all duration-300">
       <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
    </div>
    <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-[#00d2ff]/80 transition-all duration-300">
       <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
    </div>
    
    {title && (
      <div className="text-center text-[#c2e2ff] text-xl font-bold mb-3 pb-2 border-b border-[#1e3a8a]/60 tracking-wider flex-none">
        {title}
      </div>
    )}
    {children}
  </div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth, innerHeight } = window;
      const scaleX = innerWidth / 1760;
      const scaleY = innerHeight / 880;
      setScale(Math.min(scaleX, scaleY) * 0.98); // slight padding
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const timer = setInterval(() => {
      const now = new Date();
      setTimeStr(`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`);
    }, 1000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-screen h-screen bg-[#020617] overflow-hidden font-sans bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a1930] via-[#020617] to-black relative">
      {/* Target Container: 1760 * 880 */}
      <div 
        ref={containerRef}
        style={{ 
          width: '1760px', 
          height: '880px', 
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center'
        }}
        className="flex flex-col p-8 border border-[#1e3a8a]/40 shadow-[0_0_80px_rgba(0,100,255,0.15)] bg-[#040b1e]/95 backdrop-blur overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#0084ff]/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#2dd4bf]/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <header className="flex flex-col mb-4 relative">
             <div className="flex items-center justify-center relative mb-3">
               {/* Time on left */}
               <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[#00d2ff] font-mono text-xl font-bold bg-[#0a193a] px-4 py-2 border border-[#1e3a8a] shadow-[inset_0_0_15px_rgba(0,210,255,0.2)]">
                 {timeStr}
               </div>

               <div className="flex items-center gap-3">
                 <Activity className="w-10 h-10 text-[#00d2ff]" />
                 <h1 className="text-4xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00d2ff] to-white">
                   智链互联·数启未来
                 </h1>
                 <span className="text-sm text-[#00d2ff] ml-4 border border-[#00d2ff]/40 px-3 py-1 bg-[#00d2ff]/10">
                   工业互联网平台解决方案汇报
                 </span>
               </div>
             </div>
             
             <div className="w-full relative border border-[#1e3a8a]/80 bg-gradient-to-r from-[#0a193a]/80 via-[#0a193a]/40 to-[#0a193a]/80 p-4 shadow-[inset_0_0_30px_rgba(0,210,255,0.05)]">
                <div className="absolute -top-[1px] -left-[1px] w-5 h-5 border-t-2 border-l-2 border-[#00d2ff]/80">
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
                </div>
                <div className="absolute -top-[1px] -right-[1px] w-5 h-5 border-t-2 border-r-2 border-[#00d2ff]/80">
                  <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
                </div>
                <div className="absolute -bottom-[1px] -left-[1px] w-5 h-5 border-b-2 border-l-2 border-[#00d2ff]/80">
                  <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
                </div>
                <div className="absolute -bottom-[1px] -right-[1px] w-5 h-5 border-b-2 border-r-2 border-[#00d2ff]/80">
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
                </div>
                
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3 tracking-wide">
                   纺织化纤行业工业互联网平台赋能供应链协同应用实践
                </h2>
                <div className="text-[#8baed4] text-base border-l-4 border-[#00d2ff] pl-4 leading-relaxed">
                   基于可信数据空间的工业互联网平台是纺织化纤供应链协同的核心载体。本方案已在多家核心企业落地，通过整合全链路数据要素，成功实现上下游精准协同与业务闭环。
                </div>
             </div>
          </header>

          {/* Main Content Grid */}
          <div className="flex-1 grid grid-cols-[380px_1fr_300px_350px] gap-5 min-h-0">
            
            {/* Col 1: Data Sources */}
            <Box title="数据来源与数据类型" className="flex flex-col gap-3">
              {[
                { icon: Factory, title: "工业核心企业", data: "企业生产数据、交易数据", color: "text-blue-400" },
                { icon: Warehouse, title: "上下游供应商", data: "提供实时库存、\n生产进度及物料编码数据", color: "text-cyan-400" },
                { icon: Truck, title: "物流商", data: "提供运输轨迹、车辆调度及\n货物位置数据", color: "text-indigo-400" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-center p-3 bg-[#0a193a]/70 rounded border border-[#1e3a8a]/40 hover:border-[#00d2ff]/60 transition-colors group flex-1">
                  <div className="p-3 bg-[#06122d] border border-[#1e3a8a] shadow-[0_0_15px_rgba(30,58,138,0.5)] group-hover:shadow-[0_0_15px_rgba(0,210,255,0.3)] transition-all">
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-[#8baed4] text-sm whitespace-pre-line leading-relaxed">{item.data}</p>
                  </div>
                </div>
              ))}
            </Box>

            {/* Col 2: Trusted Data Space */}
            <Box title="基于可信数据空间实现多方协作" className="flex flex-col flex-1">
              <div className="flex-1 flex gap-6 items-center">
                {/* Left Connectors */}
                <div className="w-[180px] flex flex-col gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="relative p-3 border border-[#00d2ff]/30 bg-[#0a193a]/60 rounded-sm hover:border-[#00d2ff] transition-all group overflow-hidden">
                       <div className="absolute top-0 left-0 w-1 h-full bg-[#00d2ff]/50 group-hover:bg-[#00d2ff] transition-colors"></div>
                       <h4 className="text-[#00d2ff] font-bold text-sm mb-2 text-center border-b border-[#00d2ff]/20 pb-2">空间接入连接器</h4>
                       <ul className="text-[#8baed4] text-[11px] flex flex-col gap-1.5 text-center">
                         <li className="bg-[#00d2ff]/5 border border-[#00d2ff]/20 py-1 group-hover:bg-[#00d2ff]/10 group-hover:text-[#e0f2fe] transition-colors">分类分级</li>
                         <li className="bg-[#00d2ff]/5 border border-[#00d2ff]/20 py-1 group-hover:bg-[#00d2ff]/10 group-hover:text-[#e0f2fe] transition-colors">去标识化/匿名化</li>
                         <li className="bg-[#00d2ff]/5 border border-[#00d2ff]/20 py-1 group-hover:bg-[#00d2ff]/10 group-hover:text-[#e0f2fe] transition-colors">{i === 3 ? "密钥/证书同步" : "数据使用规则"}</li>
                       </ul>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="h-8 w-10 flex flex-col justify-between items-center opacity-90 animate-pulse">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00d2ff] to-[#00d2ff] shadow-[0_0_8px_#00d2ff]"></div>
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#00d2ff] to-[#00d2ff] shadow-[0_0_8px_#00d2ff] mt-2"></div>
                </div>

                {/* Center System */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <div className="w-full mb-4 relative">
                     <div className="p-4 border-2 border-[#0084ff] bg-[#06122d] shadow-[0_0_40px_rgba(0,132,255,0.2)] relative overflow-hidden group">
                        <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-[#00d2ff] shadow-[0_0_10px_#00d2ff]"></div>
                        <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-[#00d2ff] shadow-[0_0_10px_#00d2ff]"></div>
                        <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-[#00d2ff] shadow-[0_0_10px_#00d2ff]"></div>
                        <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-[#00d2ff] shadow-[0_0_10px_#00d2ff]"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#0084ff]/20 blur-3xl"></div>
                        <h3 className="text-lg font-bold text-white text-center mb-4 relative z-10">可信空间计算平台</h3>
                        <div className="flex justify-center items-center gap-8 mb-4 relative z-10">
                           <div className="flex flex-col items-center gap-2">
                             <FileText className="w-10 h-10 text-blue-400 bg-[#0a193a] p-2.5 rounded-xl border border-[#1e3a8a]" />
                           </div>
                           <div className="flex gap-2 text-[#00d2ff]">
                             <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping"></span>
                             <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping delay-[200ms]"></span>
                             <span className="w-2 h-2 rounded-full bg-[#00d2ff] animate-ping delay-[400ms]"></span>
                           </div>
                           <div className="flex flex-col items-center gap-2">
                             <Shield className="w-10 h-10 text-cyan-400 bg-[#0a193a] p-2.5 rounded-xl border border-[#1e3a8a]" />
                           </div>
                        </div>
                        <div className="flex justify-center gap-6 text-center text-[#8baed4] text-xs relative z-10">
                          <span className="bg-[#1e3a8a]/40 px-3 py-1 rounded border border-[#1e3a8a]/60">加密加速节点</span>
                          <span className="bg-[#1e3a8a]/40 px-3 py-1 rounded border border-[#1e3a8a]/60">DID身份认证</span>
                        </div>
                     </div>
                  </div>

                  <div className="w-full p-3 border border-[#1e3a8a] bg-[#0a193a]/50 text-center mb-4 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
                    <p className="text-[#00d2ff] text-sm font-medium leading-relaxed">
                      智能全链路数据要素流转，提供<br/>
                      空间数据服务，形成应用闭环<br/>
                      <span className="text-white font-bold text-base px-2 py-1 bg-[#1e3a8a]/50 mx-2 rounded border border-[#1e3a8a] inline-block mt-2">"数据 - AI算法 - 协同场景"</span>
                    </p>
                  </div>

                  <div className="w-full flex justify-between px-2 text-[#8baed4] text-xs">
                    <span className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#00d2ff]" /> 协同生产排程</span>
                    <span className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#00d2ff]" /> 库存智能预警</span>
                    <span className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-[#00d2ff]" /> 动态经营决策</span>
                  </div>
                </div>
              </div>
            </Box>

            {/* Col 3: Data Demanders */}
            <div className="flex flex-col gap-4">
              <Box title="平台数据需求方" className="flex-1 flex flex-col items-center justify-center p-4">
                <div className="w-full">
                  <p className="font-bold text-sm mb-4 text-white leading-relaxed text-center bg-[#0a193a]/50 p-2 border border-[#1e3a8a]/30">
                    工业企业、大型制造核心企业、上游原料供应商、下游织造企业
                  </p>
                  <ul className="space-y-3 text-sm text-[#c2e2ff] pl-2">
                    {["全链条生产稳定运行", "实时掌握生产任务进度", "产业链供应链生态协同", "供销存一体化管理", "全面提升运营决策质量"].map((text, i) => (
                      <li key={i} className="flex items-center gap-3 bg-gradient-to-r from-[#0a193a]/80 to-transparent p-1.5 group">
                        <div className="relative w-2 h-2 flex items-center justify-center">
                          <div className="absolute w-full h-full bg-[#00d2ff] rotate-45 shadow-[0_0_10px_#00d2ff] group-hover:scale-150 group-hover:bg-white transition-all duration-300"></div>
                        </div>
                        <span className="group-hover:text-white transition-colors">{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Box>

              <div className="relative p-4 border border-[#00d2ff]/40 bg-[#0a193a]/60 rounded-sm">
                 <h4 className="text-[#00d2ff] font-bold text-base mb-3 text-center">空间接入连接器</h4>
                 <ul className="text-[#c2e2ff] text-sm flex flex-col gap-2 text-center border-t border-[#00d2ff]/30 pt-3">
                   <li className="py-2 bg-gradient-to-r from-transparent via-[#00d2ff]/15 to-transparent hover:via-[#00d2ff]/25 transition-colors">统一身份认证中心</li>
                   <li className="py-2 bg-gradient-to-r from-transparent via-[#00d2ff]/15 to-transparent hover:via-[#00d2ff]/25 transition-colors">精细化权限访问控制</li>
                   <li className="py-2 bg-gradient-to-r from-transparent via-[#00d2ff]/15 to-transparent hover:via-[#00d2ff]/25 transition-colors">使用量度与计量计费</li>
                 </ul>
              </div>
            </div>

            {/* Col 4: Application Results (Main Metrics) */}
            <Box title="方案落地应用指标" className="flex flex-col gap-3 py-3 flex-1">
              {[
                { title: "需求响应速度提升", highlight: "92%", sub: "准时达成率 98.5%", icon: Zap, color: "text-[#00d2ff]", bgIconColor: "text-amber-400" },
                { title: "全网物流成本降低", highlight: "13%", sub: "仓储周转率提升 21%", icon: BarChart3, color: "text-[#00d2ff]", bgIconColor: "text-teal-400" },
                { title: "已接入平台核心企业", highlight: "114", unit: "家", sub: "供应链企业 >2,000家", icon: Users, color: "text-[#00d2ff]", bgIconColor: "text-blue-400" },
                { title: "设备云端连通率", highlight: "87", unit: "%", sub: "设备综合效率(OEE) 85%", icon: Activity, color: "text-[#00d2ff]", bgIconColor: "text-emerald-400" },
              ].map((item, i) => (
                <div key={i} className="relative flex-1 flex flex-col justify-center px-4 py-2 border border-[#00d2ff]/30 bg-gradient-to-br from-[#0a193a]/90 to-[#040b1e]/90 backdrop-blur-sm hover:border-[#00d2ff]/80 transition-all overflow-hidden group shadow-[inset_0_0_15px_rgba(0,210,255,0.05)]">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d2ff]/10 rounded-full blur-2xl group-hover:bg-[#00d2ff]/25 transition-colors"></div>
                  <div className="absolute -right-2 -bottom-2 p-2 opacity-30 group-hover:opacity-60 transition-all transform group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <item.icon className={`w-20 h-20 ${item.bgIconColor} drop-shadow-[0_0_15px_currentColor]`} strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                       <div className="relative w-6 h-6 flex items-center justify-center rounded border border-[#00d2ff]/50 bg-[#00d2ff]/20 shadow-[0_0_10px_rgba(0,210,255,0.3)] group-hover:shadow-[0_0_20px_rgba(0,210,255,0.6)] group-hover:bg-[#00d2ff]/30 transition-all">
                         <item.icon className={`w-3.5 h-3.5 ${item.color} drop-shadow-[0_0_8px_currentColor]`} />
                       </div>
                       <div className="text-[#e0f2fe] text-md font-semibold tracking-wide drop-shadow-sm">{item.title}</div>
                    </div>
                    
                    <div className="flex items-baseline gap-1 mb-1">
                       <span className="text-[2.5rem] leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#e0f2fe] to-[#00d2ff] tracking-tighter drop-shadow-[0_2px_10px_rgba(0,210,255,0.4)]">
                         {item.highlight}
                       </span>
                       {item.unit && <span className="text-[#00d2ff] text-lg font-bold ml-1 drop-shadow-[0_0_8px_rgba(0,210,255,0.8)]">{item.unit}</span>}
                    </div>
                    
                    {item.sub && (
                      <div className="text-[#f0f9ff] text-xs bg-[#00d2ff]/15 inline-flex items-center px-2 py-0.5 rounded border border-[#00d2ff]/30 shadow-[inset_0_0_8px_rgba(0,210,255,0.1)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] mr-2 shadow-[0_0_6px_#00d2ff] animate-[pulse_2s_ease-in-out_infinite]"></span>
                        {item.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </Box>
          </div>

          {/* Footer */}
          <footer className="mt-4 flex flex-col items-center justify-center pt-4 relative">
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00d2ff]/60 to-transparent"></div>
             <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c2e2ff] to-[#00d2ff] tracking-[0.1em] mb-3">
               聚势启新，共筑产业繁荣
             </h3>
             <div className="flex gap-12 text-[#c2e2ff] text-base tracking-wide items-center">
               <span className="flex items-center gap-2 group"><span className="w-2 h-2 bg-[#00d2ff] rotate-45 shadow-[0_0_8px_#00d2ff] group-hover:scale-125 transition-transform"></span> 持续沉淀数据资产</span>
               <span className="flex items-center gap-2 group"><span className="w-2 h-2 bg-[#00d2ff] rotate-45 shadow-[0_0_8px_#00d2ff] group-hover:scale-125 transition-transform"></span> 深度赋能产业协同</span>
               <span className="flex items-center gap-2 group"><span className="w-2 h-2 bg-[#00d2ff] rotate-45 shadow-[0_0_8px_#00d2ff] group-hover:scale-125 transition-transform"></span> 推动行业高质量发展</span>
             </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
