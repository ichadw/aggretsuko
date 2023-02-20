import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import { LS_DATA_KEY, LS_LIST_KEY } from '@/utils/constants';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';
import noop from '@/utils/noop';
import { isInCollection } from '@/utils';
import { MovieDataType } from '@/components/MovieList';

type DataContextType = {
  addCollection: (id: string, data: MovieDataType) => void;
  removeCollection: (id: string) => void;
  myCollection: any;
};

const initValue = {
  addCollection: noop,
  removeCollection: noop,
  myCollection: [],
};

const DataContext = createContext<DataContextType>(initValue);

const useDataContext = (): DataContextType => useContext(DataContext);

const DataContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const myList = getLocalStorage(LS_DATA_KEY, {});
  const myCollection = getLocalStorage(LS_LIST_KEY, []);
  
  const addCollection = useCallback(
    (imdbID: string, data: MovieDataType): void => {
      const addedCollection = myCollection.slice();
      if (!isInCollection(imdbID)) {
        if (myCollection.length === 0) {
          setLocalStorage(LS_DATA_KEY, { [imdbID]: true });
          addedCollection.push(data);
          setLocalStorage(LS_LIST_KEY, addedCollection);
        } else {
          setLocalStorage(
            LS_DATA_KEY,
            Object.assign(myList, { [imdbID]: true })
          );
          addedCollection.push(data);

          if (addedCollection.length > myCollection.length) 
            setLocalStorage(LS_LIST_KEY, addedCollection);
        }
      }
    },
    [myList, myCollection]
  );

  const removeCollection = useCallback(
    (imdbID: string): void => {
      const tempCollection = myCollection.slice();
      if (isInCollection(imdbID)) {
        const tempList = myList;
        delete tempList[imdbID];
        setLocalStorage(LS_DATA_KEY, tempList);
        setLocalStorage(
          LS_LIST_KEY,
          tempCollection.filter((dt: MovieDataType) => dt.id !== imdbID)
        );
      }
    },
    [myList, myCollection]
  );

  const value = useMemo(
    () => ({
      ...initValue,
      addCollection,
      removeCollection,
    }),
    [addCollection, removeCollection]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { useDataContext, DataContext, DataContextProvider };
