export function isAdmin(req, res) {
  if (!req.user) {
    res.status(401).json({ msg: "Please login" });
    return false;
  }

  if (req.user.type !== "admin") {
    res.status(403).json({ msg: "Only admin can use this function" });
    return false;
  }
  return true;
}

export function isCustomer(req, res) {
  if (!req.user) {
    res.status(401).json({ msg: "Please login" });
    return false;
  }

  if (req.user.type !== "customer") {
    res.status(403).json({ msg: "Only customer can use this function" });
    return false;
  }
  return true;
}

export function isLogged(req, res) {
  if (!req.user) {
    res.status(401).json({ msg: "Please login" });
    return false;
  }
  return true;
}

