import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { findCharacteristics } from './decisionTree';
import { ChevronRight } from '../icons';

export default function Step2() {
  const { t } = useTranslation('discovery');
  const { category } = useParams();
  const characteristics = findCharacteristics({ category });

  return (
    <div className="flex flex-col min-h-screen px-4 py-6">
      <div className="flex items-center gap-2 mx-auto mb-6">
        <Link to="/" className="h-2 w-4 rounded-full bg-gray-400" />
        <Link to="/discovery" className="h-2 w-4 rounded-full bg-gray-400" />
        <Link
          to={`/discovery/${category}`}
          className="h-2 w-10 rounded-full bg-blue-800"
        />
        <div className="h-2 w-4 rounded-full bg-gray-400" />
      </div>
      <h1 className="text-3xl font-bold tracking-tighter text-gray-800 mb-8 text-center">
        {t('step2.title')}
      </h1>
      <ul className="flex-1 space-y-4">
        {characteristics.map((characteristic) => (
          <li key={characteristic.slug}>
            <Link
              className="flex items-center gap-4 p-4 rounded-full bg-blue-50 border border-blue-200 text-gray-700"
              to={`/discovery/${category}/${characteristic.slug}`}
            >
              <div className="w-12 h-12 bg-gray-300 rounded-md shrink-0" />
              <span className="flex-1 text-xl font-medium tracking-tight">
                {t(`characteristic.${characteristic.slug}`)}
              </span>
              <ChevronRight className="w-6 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="border border-blue-200 p-4 rounded-md space-y-2 bg-blue-50">
        <h2 className="text-lg font-bold tracking-tight text-gray-800">
          {t('step2.hint.title')}
        </h2>
        <p className="text-base font-medium tracking-tight text-gray-600">
          {t('step2.hint.description')}
        </p>
      </div>
    </div>
  );
}
