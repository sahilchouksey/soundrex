import {memo, useEffect} from "react";
import {Route, Switch, useParams} from "react-router-dom";

import AlbumPlaylistPage from "./Albums-Playlists";
import ArtistPage from "./Artist";

function Browse({
  rootElementRef,
  token,
  addToFavouritesHandler,
  removeFromFavouritesHandler,
  logout,
  // library,
}) {
  const {browseId} = useParams();

  const isArtist = browseId.startsWith("UC");

  useEffect(() => {
    rootElementRef?.current &&
      rootElementRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [rootElementRef]);

  return (
    <Switch>
      {isArtist ? (
        <Route path="/browse/:browseId">
          <ArtistPage logout={logout} token={token} />
        </Route>
      ) : (
        <Route path="/browse/:browseId">
          <AlbumPlaylistPage
            logout={logout}
            addToFavouritesHandler={addToFavouritesHandler}
            removeFromFavouritesHandler={removeFromFavouritesHandler}
            // library={library}
            token={token}
          />
        </Route>
      )}
    </Switch>
  );
}

export default /*memo*/ Browse;
