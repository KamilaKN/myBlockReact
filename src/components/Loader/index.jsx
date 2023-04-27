import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
    return (
        <Box
            sx={{
                display: "flex",
                height: "50vh",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress />
        </Box>
    );
};

export default Loader;
