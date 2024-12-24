using Entities;

namespace Services
{
    public interface IAlumniService
    {
        Task AddAsync(Alumni alumni);
        Task DeleteAsync(int id);
        Task<IEnumerable<Alumni>> GetAllAsync();
        Task<Alumni> GetByIdAsync(int id);
        Task UpdateAsync(Alumni alumni);
    }
}