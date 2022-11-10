import { MyInfoProps } from './types'

export const MyInfo: React.FC<MyInfoProps> = ({ t }) => {
  return (
    <div className="text-center p-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
        {t('app.name')}
      </h2>
      <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
        {t('app.position')}
      </h3>
      <p className="text-medium py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
        {t('app.info')}
      </p>
    </div>
  )
}
