/**
 * Placeholder home page — replace this with the app's real home.
 *
 * This is intentionally unstyled scaffolding, not a design to build on.
 * Design the app's own look (layout, theme tokens, typography) from your
 * product's point of view instead of extending this page.
 */

import { useAuthProfileReady } from 'deepspace'
import { APP_NAME } from '../../constants'
import Header from "../../components/Main/Header"
import SubHeader from '@/components/Main/SubHeader';
import { AllExpenses } from '@/components/Main/AllExpenses';
import { ExpenseWindow } from '@/components/Windows/ExpenseWindow';
import { useAppContext } from '@/components/AppContext';
import IconsWindow from '@/components/Windows/IconsWindow';
import { WalletWindow } from '@/components/Windows/WalletWindow';
import WalletDropDown from '@/components/DropDowns/WalletDropDown';

export default function HomePage() {
  const { isSignedIn, user } = useAuthProfileReady({ requireUser: true })
  const {
    openExpenseWindowObject: {openExpenseWindow},
    openWalletWindowObject: {openWalletWindow}} = useAppContext();
  
  return (
    // <div className="flex min-h-full flex-col items-center justify-center gap-3 bg-background px-6 text-center text-foreground">
    //   <h1 className="text-2xl font-semibold">{APP_NAME}</h1>
    //   <p className="max-w-md text-sm text-muted-foreground">
    //     This is a placeholder page. Replace <code>src/pages/(app)/home.tsx</code>{' '}
    //     with the app&apos;s real home, and give the app its own theme in{' '}
    //     <code>src/themes.css</code>.
    //   </p>
    //   {isSignedIn && user && (
    //     <p className="text-sm text-muted-foreground">Signed in as {user.name ?? user.email}</p>
    //   )}
    // </div>

    <div className='w-full h-screen flex justify-center items-center bg-purple-600'>
      <ExpenseWindow/>
      <IconsWindow/>
      <WalletWindow/>
      <WalletDropDown/>
      {(openExpenseWindow || openWalletWindow) && (<div className='w-full h-screen z-40 bg-black fixed inset-0 opacity-25'/>)}

      {/* Main page container */}
      <div className='w-[59%] relative max-lg:w-[97%] h-[760px]
      bg-white dark:bg-slate-900 border border-slate-800 shadow-2xl rounded-2xl p-12 px-[52px] max-sm:px-[30px]'>
      <Header/>
      <SubHeader/>
      <AllExpenses/>
      </div>
    </div>
  );
}
